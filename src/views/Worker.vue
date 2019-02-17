<template>
  <div id="wrapper">
    <div class="container page">
      <h1 class="page-header">Worker</h1>
      <h2 class="page-subheader">Create My Profile</h2>

      <form class="worker-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" name="name" placeholder="" />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" class="form-control" name="address" placeholder="" />
        </div>
        <div class="form-group">
          <label for="skillset">Skillset</label>
          <textarea class="form-control" id="skillset" placeholder="">Mason, Welder, Roofer, Painter
          </textarea> <!-- multi-select option? -->
        </div>
        <div class="form-group">
          <label for="salary">Years of Experience</label>
          <input type="number" class="form-control" id="salary" value="1" />
        </div>
        <div class="form-group">
          <label for="salary">Desired Salary (USD per month)</label>
          <input type="number" class="form-control" id="salary" value="2000" />
        </div>
        <div class="form-group">
          <label for="availability">Earliest Date of Availability</label>
          <input type="date" class="form-control" id="availability" />
        </div>
        <div class="form-group">
          <label for="length">Maximum Length of Contract</label>
          <select class="form-control" id="country-from">
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
          </select>
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
            <label for="country-to">Country To</label> <!-- multi-select option? -->
            <select class="form-control" id="country-to">
              <option value="DB">Dubai</option> <!-- check country code -->
              <option value="MY">Malaysia</option>
              <option value="SG">Singapore</option>
              <option value="AE">United Arab Emirates</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="visa">Do you have a valid passport?</label>
          <select class="form-control" id="country-to">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
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
        <!--
          You have successfully submitted your application. 
          We will review and let you know your application status as soon as possible.
        -->
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
import Fortmatic from 'fortmatic';

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
  padding-top: 4em;
}

.worker-form {
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

.page-header {
  margin-bottom: 0.5em;
}

.page-subheader {
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