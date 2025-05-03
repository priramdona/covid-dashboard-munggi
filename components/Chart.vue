<template>
    <ClientOnly>
      <div ref="chartContainer" class="w-full h-[400px]" />
    </ClientOnly>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  const chartContainer = ref(null)
  
  onMounted(async () => {
    if (process.client) {
      const Highcharts = await import('highcharts')
      Highcharts.chart(chartContainer.value, {
        chart: { type: 'line' },
        title: { text: 'Data Kasus COVID-19' },
        xAxis: { categories: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum'] },
        series: [{
          name: 'Kasus Harian',
          data: [10, 20, 15, 25, 30]
        }]
      })
    }
  })
  </script>
  