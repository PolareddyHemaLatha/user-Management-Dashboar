<template>
  <div>
    <apexchart
      width="500"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const options = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
  },
});
const series = ref([
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
]);
</script>