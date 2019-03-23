<template>
  <div>
    <canvas id="chain-chart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js';

import chainChartData from "../../charts/chain.js";

export default {
  data() {
    return {
      chainChartData: chainChartData
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
    this.createChart("chain-chart", this.chainChartData);
  }
};
</script>


