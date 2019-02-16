<template>
  <div id="wrapper">
    <Header></Header>

    <div class="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
      unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
      explicabo.</p>


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
.container {
  padding-top: 1em;
}
</style>