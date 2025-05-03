<template>
    <div ref="mapElement" class="h-[400px] w-full" />
  </template>
  <script setup>
  import { onMounted, ref } from 'vue'
  
  const mapElement = ref(null)
  onMounted(async () => {
  if (process.client) {
    try {
      const L = await import('leaflet')

      const map = L.map(mapElement.value).setView([20, 0], 2)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(map)

      const res = await fetch('https://disease.sh/v3/covid-19/countries')
      const data = await res.json()

      data.forEach(country => {
        const { countryInfo, country: name, cases } = country
        if (countryInfo.lat && countryInfo.long) {
          L.marker([countryInfo.lat, countryInfo.long])
            .addTo(map)
            .bindPopup(`<b>${name}</b><br>Kasus: ${cases.toLocaleString()}`)
        }
      })
    } catch (error) {
      console.error('Error loading Leaflet map:', error)
    }
  }
})

  // onMounted(async () => {
  //   if (process.client) {
  //     const L = await import('leaflet')
  
  //     const map = L.map(mapElement.value).setView([20, 0], 2)
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; OpenStreetMap'
  //     }).addTo(map)
  
  //     const res = await fetch('https://disease.sh/v3/covid-19/countries')
  //     const data = await res.json()
  
  //     data.forEach(country => {
  //       const { countryInfo, country: name, cases } = country
  //       if (countryInfo.lat && countryInfo.long) {
  //         L.marker([countryInfo.lat, countryInfo.long])
  //           .addTo(map)
  //           .bindPopup(`<b>${name}</b><br>Kasus: ${cases.toLocaleString()}`)
  //       }
  //     })
  //   }
  // })
  </script>
  
  <style scoped>
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
  </style>
  