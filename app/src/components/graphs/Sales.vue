<template>
  <div>
    <canvas id="sales-chart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js';

import salesData from "../../charts/sales-data.js";

export default {
  data() {
    return {
      salesData: salesData
    };
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("sales-chart", this.salesData);
  }
};
</script>

