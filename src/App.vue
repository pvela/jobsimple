
<template>
  <div id="app">
    <Login v-if="!store.currentUser" />
    <div v-else>
      <button @click="logout">Log out</button>
    </div>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { store } from './store';
import Login from './views/Login';
import Home from './views/Home';
import Fortmatic from 'fortmatic';
const fm = new Fortmatic('pk_test_80863C4FA1028899');
export default {
  components: { Login, Home},
  data() {
    return {
      store
    };
  },
  methods: {
    logout() {
      fm.user.logout();
      firebase.auth().signOut()
        .catch((err) => alert(err.message || err));
    },
  }
}
</script>