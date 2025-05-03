<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>
      <div class="mb-4">
        <ClientOnly>
            <Map />
        </ClientOnly>
      </div>
      <div class="mb-4">
        <Chart />
      </div>
    </div>
  </template>
  
  <script>
  import Map from '~/components/Map.vue';
  import Chart from '~/components/Chart.vue';
  
  export default {
    components: {
      Map,
      Chart
    }
  };
  </script>
  
  <style scoped>
  /* Add some custom styling */
  </style>
  