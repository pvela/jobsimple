<template>
  <div id="wrapper">
    <div class="container page">
      <h1 class="page-header">Sponsor</h1>
      <h2 class="page-subheader">Step 2: Create a Job Posting</h2>

      <form class="sponsor-form">
        <div class="form-group">
          <label for="title">Job Title</label>
          <input type="text" class="form-control" name="title" value="Construction worker" />
        </div>
        <div class="form-group">
          <label for="length">Length of Contract</label>
          <select class="form-control" id="country-from" name="length">
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
          </select>
        </div>
        <div class="form-group">
          <label for="years">Required Years of Experience</label>
          <select class="form-control" id="country-from" name="years">
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5+ years</option>
          </select>
        </div>
        <div class="form-group">
          <label for="salary">Salary (USD per month)</label>
          <input type="number" class="form-control" name="salary" value="2000" />
        </div>
        <div class="form-group">
          <label for="skills">Desired Skills</label> <!-- multi-select -->
          <input type="text" class="form-control" name="skills" value="Construction" />
          <!-- Electrical, plumbing, etc -->
        </div>
        <div class="form-group">
          <label for="date">Start Date</label>
          <input type="date" class="form-control" name="date" />
        </div>
        <div class="form-group">
          <label for="benefits">Benefits</label>
          <select class="form-control" id="country-from" name="benefits" multiple>
            <option value="travel">Travel</option>
            <option value="insurance">Insurance</option>
            <option value="vacation">Vacation</option>
          </select>
        </div>
        <button class="btn btn-primary float-right"
          v-on:click.stop.prevent="nextPage">Find My Matches</button>
        <button class="btn btn-primary float-right" id="btn--back" 
          v-on:click.stop.prevent="prevPage">Back</button>
      </form>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'JobPosting',
  data() {
    return {
    };
  },
  methods: {
    prevPage: function (event) {
      this.$router.push("/sponsor");
    },
    nextPage: function (event) {
      this.$router.push("/sponsormatchup");
    }
  }
}
</script>

<style scoped>
.page {
  padding-bottom: 4em;
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

#btn--back {
  margin-right: 1em;
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