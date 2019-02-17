<template>
  <div class="home">
    <!--<Main />-->
    <NewUser />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//import Main from '@/components/Main.vue';
import NewUser from '@/views/NewUser.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    NewUser, Footer
  }
}
</script>
