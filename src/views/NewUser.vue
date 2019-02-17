<template>
  <div id="wrapper">
    <div class="container page">
      <h2 class="page-header">Select a user type</h2>

      <div class="btns">
        <router-link class="btn btn-primary btn-lg btns__user" to="worker">Worker</router-link>
        &nbsp;
        <router-link class="btn btn-success btn-lg btns__user" to="sponsor">Sponsor</router-link>
      </div>


    </div>
  </div>
</template>

<script>
import { store } from '../store';
import Fortmatic from 'fortmatic';
import Header from '../components/Header.vue';

export default {
  name: 'NewUser',
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

.btns {
  /*border: 1px solid black;*/
  height: 200px;
  width: 100%;
}

.btns__user {
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 32px;
  text-align: center;
  width: 40%;
}
</style>