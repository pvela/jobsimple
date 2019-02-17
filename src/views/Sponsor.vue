<template>
  <div id="wrapper">
    <div class="container page">
      <h1 class="page-header">Sponsor</h1>
      <h2 class="page-subheader">Step 1: Create My Profile</h2>

      <form class="sponsor-form">
        <div class="form-group">
          <label for="name">Company Name</label>
          <input type="text" class="form-control" name="name" value="Dan Builder, Inc" />
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" class="form-control" name="industry" value="Construction" />
        </div>
        <div class="form-group">
          <label for="address">Street Address</label>
          <input type="text" class="form-control" name="address" value="11 Jurong Ave" />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" name="city" value="Jurong" />
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" name="country" value="Singapore" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" name="phone" value="01165-456-9898" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" name="email" value="hr@danbuilder.com" />
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
  name: 'sponsor',
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

.page-header {
  margin-bottom: 0.5em;
}

.page-subheader {
  margin-bottom: 3em;
}

.sponsor-form {
  margin: 0 auto;
  margin-top: -3em;
  text-align: left;
  width: 50%;
}

input[type='text'] {
  border: 1px solid #DEDEDE;
}

input[type='number'] {
  border: 1px solid #DEDEDE;
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