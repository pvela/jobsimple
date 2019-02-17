<template>
  <div>
    <!-- Header Container
    ================================================== -->
    <header id="header-container" class="fullwidth">

      <!-- Header -->
      <div id="header">
        <div class="container">
          
          <!-- Left Side Content -->
          <div class="left-side">
            
            <!-- Logo -->
            <div id="logo">
              <router-link to="/">
                <img src="@/assets/images/logo_jobsimple.png" alt="JobSimple">
              </router-link>
            </div>

            <!-- Main Navigation -->
            <nav id="navigation">
              <ul id="responsive">

                <li><a href="#">Workers</a>
                  <ul class="dropdown-nav">
                    <li><router-link to="worker">Worker</router-link></li>
                    <li><router-link to="find">Find</router-link></li>
                  </ul>
                </li>

                <li><a href="#">Sponsors</a>
                  <ul class="dropdown-nav">
                    <li><router-link to="sponsor">Sponsor</router-link></li>
                  </ul>
                </li>

                <button v-if="store.currentUser" class="button button--logout ripple-effect" @click="logout">Log out</button>

              </ul>
            </nav>
            <div class="clearfix"></div>
            <!-- Main Navigation / End -->
            
          </div>
          <!-- Left Side Content / End -->


          <!-- Right Side Content / End -->
          <div class="right-side">

            <!-- Mobile Navigation Button -->
            <span class="mmenu-trigger">
              <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </span>

          </div>
          <!-- Right Side Content / End -->

        </div>
      </div>
      <!-- Header / End -->
    </header>
    <div class="clearfix"></div>
  </div>
  <!-- Header Container / End -->
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { store } from '../store';
import Fortmatic from 'fortmatic';
const fm = new Fortmatic('pk_test_80863C4FA1028899');
import WorkerMatchup from '../views/WorkerMatchup';

export default {
  name: 'Header',
  data() {
    return {
      store: store
    };
  },
  methods: {
    logout() {
      fm.user.logout();
      firebase.auth().signOut()
        .catch((err) => alert(err.message || err));
    }
  }
}
</script>

<style scoped>
.button--logout {
  margin-left: 50px;
  margin-top: -4px;
}
</style>