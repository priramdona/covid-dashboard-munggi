<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>

    <div>
      <Map />>
    </div>

    <div>
      <Chart />
    </div>
  </div>
</template>

<script setup>
import Map from '~/components/Map.vue'
import Chart from '~/components/Chart.vue'
// import ClientOnly from 'vue-client-only'
</script>
