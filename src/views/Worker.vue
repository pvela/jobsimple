<template>
  <div id="wrapper">
    <div class="container page">
      <h1 class="page-header">Worker | Create My Profile</h1>

      <form class="worker-form">
        <div class="form-group">
          <label for="skillset">Skillset</label>
          <textarea class="form-control" id="skillset" placeholder="">Indian, Chinese, Thai
          </textarea>
        </div>
        <div class="form-group">
          <label for="salary">Salary (per month)</label>
          <input type="number" class="form-control" id="salary" value="50000" />
        </div>
        <div class="form-group">
          <label for="availability">Availability</label>
          <input type="date" class="form-control" id="availability" />
        </div>
        <div class="row">
        <!-- https://www.freeformatter.com/iso-country-list-html-select.html#iso31662 -->
          <div class="form-group col-md-6">
            <label for="country-from">Country From</label>
            <select class="form-control" id="country-from">
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
              <option value="PH">Philippines</option>
              <option value="LK">Sri Lanka</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="country-to">Country To</label>
            <select class="form-control" id="country-to">
              <option value="DB">Dubai</option> <!-- check country code -->
              <option value="MY">Malaysia</option>
              <option value="SG">Singapore</option>
              <option value="AE">United Arab Emirates</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="resume">Resume</label>
          <input type="file" class="" id="resume" />
        </div>
        <div class="form-group">
          <label for="video">Video</label>
          <input type="file" class="" id="video" />
        </div>
        <div class="form-group">
          <label for="visa">Visa / Passport</label>
          <input type="file" class="" id="visa" />
        </div>
        <button class="btn btn-primary float-right" @click="addListing">Submit</button>
      </form>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { store } from '../store';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
/*import Tegula from 'tegula';
const tegula = new Tegula();

// initialize everything
tegula.initialize().then(() => {
  // now you're good to go!
  console.log("tegula initialized");
});
*/
export default {
  name: 'Worker',
  data() {
    return {
    };
  },
  components: {
    Header
  },
  methods: {
    addListing() {
      /*const listingData = { "id":"1","name":"name","opendata":"location, price, desc" };
      tegula.addListing(listingData).then((results) => {
        console.log("##################");
        console.log(results);
        //this.$router.push('workerstatus');
      });*/
      this.$router.push('workerstatus');
    }

  }
}
</script>

<style scoped>
.page {
  padding-top: 5em;
}

.worker-form {
  margin: 0 auto;
  margin-top: -3em;
  text-align: left;
  width: 50%;
}

.page-header {
  margin-bottom: 3em;
}

#skillset {
  resize: none;
}

.country-select {
  width: 100%;
}

@media (max-width: 991px) {
  .worker-form {
    padding-bottom: 4em;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .worker-form {
    padding-bottom: 4em;
    width: 50%;
  }
}
</style>