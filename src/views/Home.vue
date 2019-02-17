<template>
  <div class="home">
    <NewUser />
  </div>
</template>

<script>
// @ is an alias to /src
import NewUser from '@/views/NewUser.vue';

export default {
  name: 'home',
  components: {
    NewUser
  }
}
</script>
