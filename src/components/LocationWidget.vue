<template>
    <div class="location">
      <h1>Lokasi</h1>
      <div v-if="locationData">
        <p>Latitude: {{ locationData.latitude }}</p>
        <p>Longitude: {{ locationData.longitude }}</p>
        <p>Alamat: {{ locationData.address }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <button @click="fetchLocationData" class="btn-refresh">Refresh Lokasi</button>
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Location',
    data() {
      return {
        locationData: null,
      };
    },
    mounted() {
      this.fetchLocationData();
    },
    methods: {
      async fetchLocationData() {
        try {
          if (navigator.geolocation) {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            const apiKey = '92591005a7b94008909d59a64b6d2a49';
            const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
              latitude + ',' + longitude
            )}&key=${apiKey}`;
  
            const response = await fetch(apiUrl);
            const data = await response.json();
  
            this.locationData = {
              latitude,
              longitude,
              address: data.results[0].formatted,
            };
  
            this.displayMap(latitude, longitude);
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      },
      displayMap(latitude, longitude) {
        const mapOptions = {
          center: { lat: latitude, lng: longitude },
          zoom: 10,
        };
        const mapElement = document.getElementById('map');
        const map = new google.maps.Map(mapElement, mapOptions);
  
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
        });
      },
    },
  };
  </script>
  
  <style>
  .location {
    text-align: center;
    color: black;
    width: 450px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid black;
  }
  
  .location h1 {
    color: black; /* Mengubah warna font menjadi hitam */
  }
  
  .location p {
    color: black; /* Mengubah warna font menjadi hitam */
  }
  
  .btn-refresh {
    padding: 10px 20px;
    background-color: #c0ae8c;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .btn-refresh:hover {
    background-color: #c0ae8c;
  }
  
  #map {
    height: 400px;
    width: 100%;
    margin-top: 20px;
  }
  </style>
  