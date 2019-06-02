<template>
  <!--
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  -->
  <div>
    <home-hero></home-hero>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomeHero from '@/components/HomeHero.vue';

export default {
  name: 'home',
  components: {
    HomeHero
  }
}
</script>
