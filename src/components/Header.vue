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
              <a href="index.html"><img src="@/assets/images/logo.png" alt="Hireo"></a>
            </div>

            <!-- Main Navigation -->
            <nav id="navigation">
              <ul id="responsive">

                <li><router-link to="find">Find Workers</router-link>
                </li>

                <li><a href="#">Find Work</a>
                  <ul class="dropdown-nav">
                    <li><a href="#">Browse Jobs</a>
                      <ul class="dropdown-nav">
                        <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                        <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                        <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                        <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                        <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                        <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Browse Tasks</a>
                      <ul class="dropdown-nav">
                        <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                        <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                        <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                        <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                      </ul>
                    </li>
                    <li><a href="browse-companies.html">Browse Companies</a></li>
                    <li><a href="single-job-page.html">Job Page</a></li>
                    <li><a href="single-task-page.html">Task Page</a></li>
                    <li><a href="single-company-profile.html">Company Profile</a></li>
                  </ul>
                </li>

                <li><a href="#">For Sponsors</a>
                  <ul class="dropdown-nav">
                    <li><a href="#">Find a Freelancer</a>
                      <ul class="dropdown-nav">
                        <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                        <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                        <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                        <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                      </ul>
                    </li>
                    <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                    <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                    <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                  </ul>
                </li>

                <li><a href="#">Matchup</a>
                  <ul class="dropdown-nav">
                    <li><router-link to="matchup">Worker</router-link></li>
                    <li><router-link to="sponsormatchup">Sponsor</router-link></li>
                  </ul>
                </li>

                <button class="button button--logout ripple-effect" @click="logout">Log out</button>

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