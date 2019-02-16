<template>
  <div class="home">
    <!--<Main />-->
    <NewUser />
  </div>
</template>

<script>
// @ is an alias to /src
//import Main from '@/components/Main.vue';
import NewUser from '@/views/NewUser.vue';

export default {
  name: 'home',
  components: {
    NewUser
  }
}
</script>
