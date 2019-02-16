<template>
  <div id="wrapper">
    <Header></Header>

    <div class="container page">
      <h2 class="page-header">Employee Form</h2>

      lorem ipsum
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import Fortmatic from 'fortmatic';
import Header from '../components/Header.vue';

export default {
  name: 'Employee',
  data() {
    return {
    };
  },
  components: {
    Header
  },
  methods: {
  }
}
</script>

<style scoped>
.page {
  padding-top: 5em;
}

.page-header {
  margin-bottom: 3em;
}
</style>