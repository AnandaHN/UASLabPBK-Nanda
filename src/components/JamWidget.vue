<template>
    <div class="jam-digital">
      <div class="bingkai">
        <div class="jam">{{ jam }}</div>
        <div class="menit">{{ menit }}</div>
        <div class="detik">{{ detik }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jam: '',
        menit: '',
        detik: ''
      };
    },
    mounted() {
      // Panggil fungsi updateWaktu setiap detik
      setInterval(this.updateWaktu, 1000);
    },
    methods: {
      updateWaktu() {
        const waktuSekarang = new Date();
        const options = {
          timeZone: 'Asia/Jakarta',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        // Format waktu sesuai dengan WIB
        const waktuWIB = waktuSekarang.toLocaleString('id-ID', options);
        const [jam, menit, detik] = waktuWIB.split(':');
        this.jam = jam;
        this.menit = menit;
        this.detik = detik;
      }
    }
  };
  </script>
  
  <style scoped>
  .bingkai {
    display: inline-block;
    border: 1px solid black;
    border-radius: 6px;
    padding: 10px;
  }
  
  .bingkai h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .jam-digital .jam,
  .jam-digital .menit,
  .jam-digital .detik {
    font-size: 48px;
    color: #333;
    padding: 10px;
  }
  </style>
  