
<template>
  <div id="app">
    <Header />
    <Login v-if="!store.currentUser" />
    <div id="router" v-else>
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
html, body {
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}

#router {
  flex: 1 0 auto;
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

footer {
  flex-shrink: 0;
}
</style>