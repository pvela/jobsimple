<template>
  <div id="wrapper">
    <div class="container page">
      <h1 class="page-header">Sponsor</h1>
      <h2 class="page-subheader">Step 1: Create My Profile</h2>

      <form class="sponsor-form">
        <div class="form-group">
          <label for="name">Company Name</label>
          <input type="text" class="form-control" name="name" />
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" class="form-control" name="industry" />
        </div>
        <div class="form-group">
          <label for="address">Street Address</label>
          <input type="text" class="form-control" name="address" />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" name="city" />
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" name="country"/>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" name="phone" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" name="email" />
        </div>
        <button class="btn btn-primary float-right" v-on:click.stop.prevent="nextPage">Next</button>
      </form>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { store } from '../store';
import Fortmatic from 'fortmatic';

export default {
  name: 'Sponsor',
  data() {
    return {
    };
  },
  methods: {
    nextPage: function (event) {
      this.$router.push("/jobposting");
    }
  }
}
</script>

<style scoped>
.page {
  padding-top: 4em;
}

.sponsor-form {
  margin: 0 auto;
  margin-top: -3em;
  text-align: left;
  width: 50%;
}

.page-header {
  margin-bottom: 0.5em;
}

.page-subheader {
  margin-bottom: 3em;
}

@media (max-width: 991px) {
  .sponsor-form {
    padding-bottom: 4em;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .worksponsorer-form {
    padding-bottom: 4em;
    width: 50%;
  }
}
</style>