<template>
    <div class="home">
      <h1>Selamat Datang di Website Kami</h1>
      <p>Kami menyediakan beberapa Fitur Widget dan Pencatat Kegiatan</p>
      
      <br>
      <br>
      <router-link to="/kegiatan" class="button-link">
        <button>Input Kegiatan </button>
      </router-link>
    </div>
  </template>
  
  <style>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .button-link {
    text-decoration: none;
  }
  
  button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  