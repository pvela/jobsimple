<template>
  <div id="wrapper">
    <div class="container page">
      <h2 class="page-header">Choose Your Profile</h2>

      <div class="btns">
        <router-link class="btn btn-primary btn-lg btns__user" to="worker">
          Looking for a job?<br>
          <span class="type-header">Worker</span>
        </router-link>
        &nbsp;
        <router-link class="btn btn-success btn-lg btns__user" to="sponsor">
          Need to hire someone?<br>
          <span class="type-header">Sponsor</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { store } from '../store';
import Fortmatic from 'fortmatic';

export default {
  name: 'NewUser',
  data() {
    return {
    };
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

.type-header {
  font-size: 2.5em;
  font-weight: 700;
}
</style>