
<template>
  <div id="app">
    <Header />
    <Login v-if="!store.currentUser" />
    <div v-else>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { store } from './store';
import Login from './views/Login';
import Home from './views/Home';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import Fortmatic from 'fortmatic';
const fm = new Fortmatic('pk_test_80863C4FA1028899');

export default {
  components: { 
    Header, Login, Home, Footer
  },
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