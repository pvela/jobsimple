<template>
  <!-- Wrapper -->
  <div id="wrapper">

  <!-- Intro Banner
  ================================================== -->
  <!-- add class "disable-gradient" to enable consistent background overlay -->
  <div class="intro-banner" data-background-image="@/assets/images/home-background.jpg">
    <div class="container">
      
      <!-- Search Bar -->
      <div class="row search-bar">
        <div class="col-md-12">
          <div class="intro-banner-search-form">

            <!-- Search Field -->
            <div class="intro-search-field with-autocomplete">
              <label for="autocomplete-input" class="field-title ripple-effect">Where?</label>
              <div class="input-with-icon">
                <input id="autocomplete-input" type="text" placeholder="Country">
                <i class="icon-material-outline-location-on"></i>
              </div>
            </div>

            <!-- Search Field -->
            <div class="intro-search-field">
              <label for ="intro-keywords" class="field-title ripple-effect">What job you want?</label>
              <input id="intro-keywords" type="text" placeholder="Job Title or Keywords">
            </div>

            <!-- Button -->
            <div class="intro-search-button">
              <button class="button ripple-effect" 
                onclick="window.location.href='jobs-list-layout-full-page-map.html'">Search</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="row">
        <div class="col-md-12">
          <ul class="intro-stats margin-top-45 hide-under-992px">
            <li>
              <strong class="counter">1,586</strong>
              <span>Jobs Posted</span>
            </li>
            <li>
              <strong class="counter">3,543</strong>
              <span>Tasks Posted</span>
            </li>
            <li>
              <strong class="counter">1,232</strong>
              <span>Workers</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>


  <!-- Content
  ================================================== -->
  <!-- Category Boxes -->
  <div class="section margin-top-65">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">

          <div class="section-headline centered margin-bottom-15">
            <h3>Popular Job Categories</h3>
          </div>

          <!-- Category Boxes Container -->
          <div class="categories-container">

            <!-- Category Box -->
            <a href="jobs-grid-layout-full-page.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-file-code-o"></i>
              </div>
              <div class="category-box-counter">612</div>
              <div class="category-box-content">
                <h3>Chef</h3>
                <p>Asian, Vegan</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-list-layout-full-page-map.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-cloud-upload"></i>
              </div>
              <div class="category-box-counter">113</div>
              <div class="category-box-content">
                <h3>Domestic Help</h3>
                <p>Gardening, home maintenance</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-list-layout-full-page-map.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-suitcase"></i>
              </div>
              <div class="category-box-counter">186</div>
              <div class="category-box-content">
                <h3>Nanny</h3>
                <p>baby sitting</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-list-layout-1.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-pencil"></i>
              </div>
              <div class="category-box-counter">298</div>
              <div class="category-box-content">
                <h3>Tutoring</h3>
                <p>Math, Science</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-list-layout-2.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-pie-chart"></i>
              </div>
              <div class="category-box-counter">549</div>						
              <div class="category-box-content">
                <h3>Construction Worker</h3>
                <p>mason</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-list-layout-1.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-image"></i>
              </div>
              <div class="category-box-counter">873</div>
              <div class="category-box-content">
                <h3>Welder</h3>
                <p>Welding, Certified</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-list-layout-2.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-bullhorn"></i>
              </div>
              <div class="category-box-counter">125</div>
              <div class="category-box-content">
                <h3>Electrician</h3>
                <p>electrical certified</p>
              </div>
            </a>

            <!-- Category Box -->
            <a href="jobs-grid-layout-full-page.html" class="category-box">
              <div class="category-box-icon">
                <i class="icon-line-awesome-graduation-cap"></i>
              </div>
              <div class="category-box-counter">445</div>
              <div class="category-box-content">
                <h3>Plumber</h3>
                <p>Plumber</p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- Category Boxes / End -->


  <!-- Features Jobs -->
  <div class="section gray margin-top-45 padding-top-65 padding-bottom-75">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          
          <!-- Section Headline -->
          <div class="section-headline margin-top-0 margin-bottom-35">
            <h3>Featured Jobs</h3>
            <a href="jobs-list-layout-full-page-map.html" class="headline-link">Browse All Jobs</a>
          </div>
          
          <!-- Jobs Container -->
          <div class="listings-container compact-list-layout margin-top-35">
            
            <!-- Job Listing -->
            <a href="single-job-page.html" class="job-listing with-apply-button">

              <!-- Job Listing Details -->
              <div class="job-listing-details">

                <!-- Logo -->
                <div class="job-listing-company-logo">
                  <img src="images/company-logo-01.png" alt="">
                </div>

                <!-- Details -->
                <div class="job-listing-description">
                  <h3 class="job-listing-title">Bilingual Nanny for a 2yr old</h3>

                  <!-- Job Listing Footer -->
                  <div class="job-listing-footer">
                    <ul>
                      <li><i class="icon-material-outline-business"></i> Hexagon 
                        <div class="verified-badge" title="Verified Employer" 
                          data-tippy-placement="top"></div></li>
                      <li><i class="icon-material-outline-location-on"></i> Singapore</li>
                      <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                      <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                    </ul>
                  </div>
                </div>

                <!-- Apply Button -->
                <span class="list-apply-button ripple-effect">Apply Now</span>
              </div>
            </a>	


            <!-- Job Listing -->
            <a href="single-job-page.html" class="job-listing with-apply-button">

              <!-- Job Listing Details -->
              <div class="job-listing-details">

                <!-- Logo -->
                <div class="job-listing-company-logo">
                  <img src="images/company-logo-05.png" alt="">
                </div>

                <!-- Details -->
                <div class="job-listing-description">
                  <h3 class="job-listing-title">Welder for highrise construction</h3>

                  <!-- Job Listing Footer -->
                  <div class="job-listing-footer">
                    <ul>
                      <li><i class="icon-material-outline-business"></i> Laxo</li>
                      <li><i class="icon-material-outline-location-on"></i> UAE</li>
                      <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                      <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                    </ul>
                  </div>
                </div>

                <!-- Apply Button -->
                <span class="list-apply-button ripple-effect">Apply Now</span>
              </div>
            </a>
            <!-- Job Listing -->
            <a href="single-job-page.html" class="job-listing with-apply-button">

              <!-- Job Listing Details -->
              <div class="job-listing-details">

                <!-- Logo -->
                <div class="job-listing-company-logo">
                  <img src="images/company-logo-02.png" alt="">
                </div>

                <!-- Details -->
                <div class="job-listing-description">
                  <h3 class="job-listing-title">Barista</h3>

                  <!-- Job Listing Footer -->
                  <div class="job-listing-footer">
                    <ul>
                      <li><i class="icon-material-outline-business"></i> Coffee</li>
                      <li><i class="icon-material-outline-location-on"></i> Dubai</li>
                      <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                      <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                    </ul>
                  </div>
                </div>

                <!-- Apply Button -->
                <span class="list-apply-button ripple-effect">Apply Now</span>
              </div>
            </a>
            

            <!-- Job Listing -->
            <a href="single-job-page.html" class="job-listing with-apply-button">

              <!-- Job Listing Details -->
              <div class="job-listing-details">

                <!-- Logo -->
                <div class="job-listing-company-logo">
                  <img src="images/company-logo-03.png" alt="">
                </div>

                <!-- Details -->
                <div class="job-listing-description">
                  <h3 class="job-listing-title">Restaurant Cleaner</h3>

                  <!-- Job Listing Footer -->
                  <div class="job-listing-footer">
                    <ul>
                      <li><i class="icon-material-outline-business"></i> King 
                        <div class="verified-badge" title="Verified Employer" 
                          data-tippy-placement="top"></div></li>
                      <li><i class="icon-material-outline-location-on"></i> Malaysia</li>
                      <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                      <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                    </ul>
                  </div>
                </div>

                <!-- Apply Button -->
                <span class="list-apply-button ripple-effect">Apply Now</span>
              </div>
            </a>

            <!-- Job Listing -->
            <a href="single-job-page.html" class="job-listing with-apply-button">

              <!-- Job Listing Details -->
              <div class="job-listing-details">

                <!-- Logo -->
                <div class="job-listing-company-logo">
                  <img src="images/company-logo-05.png" alt="">
                </div>

                <!-- Details -->
                <div class="job-listing-description">
                  <h3 class="job-listing-title">Plumber</h3>

                  <!-- Job Listing Footer -->
                  <div class="job-listing-footer">
                    <ul>
                      <li><i class="icon-material-outline-business"></i> Skyist</li>
                      <li><i class="icon-material-outline-location-on"></i> Baharin</li>
                      <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                      <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                    </ul>
                  </div>
                </div>

                <!-- Apply Button -->
                <span class="list-apply-button ripple-effect">Apply Now</span>
              </div>
            </a>

          </div>
          <!-- Jobs Container / End -->

        </div>
      </div>
    </div>
  </div>
  <!-- Featured Jobs / End -->


  <!-- Features Cities -->
  <div class="section margin-top-65 margin-bottom-65">
    <div class="container">
      <div class="row">

        <!-- Section Headline -->
        <div class="col-xl-12">
          <div class="section-headline centered margin-top-0 margin-bottom-45">
            <h3>Featured Countries</h3>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <!-- Photo Box -->
          <a href="jobs-list-layout-1.html" class="photo-box" 
            data-background-image="images/featured-city-01.jpg">
            <div class="photo-box-content">
              <h3>Singapore</h3>
              <span>376 Jobs</span>
            </div>
          </a>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <!-- Photo Box -->
          <a href="jobs-list-layout-full-page-map.html" class="photo-box" 
            data-background-image="images/featured-city-02.jpg">
            <div class="photo-box-content">
              <h3>Dubai</h3>
              <span>645 Jobs</span>
            </div>
          </a>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <!-- Photo Box -->
          <a href="jobs-grid-layout-full-page.html" class="photo-box" 
            data-background-image="images/featured-city-03.jpg">
            <div class="photo-box-content">
              <h3>UAE</h3>
              <span>832 Jobs</span>
            </div>
          </a>
        </div>

        <div class="col-xl-3 col-md-6">
          <!-- Photo Box -->
          <a href="jobs-list-layout-2.html" class="photo-box" 
            data-background-image="images/featured-city-04.jpg">
            <div class="photo-box-content">
              <h3>Malaysia</h3>
              <span>513 Jobs</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>
  <!-- Features Cities / End -->

  </div>
  <!-- Wrapper / End -->
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { store } from '../store';
import Fortmatic from 'fortmatic';
import Header from './Header.vue';
const fm = new Fortmatic('pk_test_80863C4FA1028899');


export default {
  name: 'Main',
  data() {
    return {
      store
    };
  },
  components: {
    Header
  },
  methods: {
    logout() {
      fm.user.logout();
      firebase.auth().signOut()
        .catch((err) => alert(err.message || err));
    },
    addListing() {
      const listingData = { ethuser:web3.eth.accounts[0], fbuser:store.currentUser};
      tegula.addListing(listingData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
