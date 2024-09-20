<template>
    <div>
    <Header/>
  </div>

    <main>
      <router-view/>
    </main>

    <div>
      <Footer></Footer>
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>