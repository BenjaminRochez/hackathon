<template>
  <v-card>
    <v-data-table :headers="headers" :items="stocks" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.euros }}</td>
        <td class="text-xs-right">{{ props.item.ref }}</td>
        <td class="text-xs-right">
          <v-progress-linear color="primary" height="2" :value="props.item.remaining"></v-progress-linear>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>
      
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Product name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Price (p)", value: "euros", align: "right" },
        { text: "Ref", value: "ref", align: "right" },
        { text: "Remaining (x)", value: "remaining", align: "right" }
      ],
      stocks: [
        {
          id: 1,
          name: "Frozen Yogurt",
          euros: 25,
          ref: 1532523432,
          remaining: 49
        }
      ]
    };
  }
};
</script>