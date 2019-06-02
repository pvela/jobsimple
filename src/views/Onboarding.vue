<template>
  <div id="wrapper">
    <div class="container page">
      <h1 class="page-header">Onboarding</h1>

      <p class="completed">Complete payroll forms</p>
      <p class="completed">Enroll health insurance</p>
      <p class="completed">Housing</p>

      <input type="checkbox" /><span class="red">Click checkbox if completed all onboarding tasks</span>

      <br><br><button class="btn btn-primary" @click="home">Done</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Onboarding',
  data() {
    return {
    };
  },
  methods: {
    home: function () {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.page {
  padding-top: 4em;
}

.page-header {
  color: #00F;
  margin-bottom: 0.5em;
}

.page-subheader {
  margin-bottom: 3em;
}

.completed {
  font-size: 1.1em;
}
</style>