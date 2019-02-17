<template>
<div id="wrapper">
    <Header></Header>
    <div class="container page">
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          
        </div>
        <div class="col-xl-9 col-lg-8 content-left-offset">

          <h3 class="page-title">Pick upto 3 to proceed to interview</h3>
          <button class="btn btn-primary float-right" @click="showSponsorStatus">Next</button>

          <!-- Freelancers List Container -->
          <div class="freelancers-container freelancers-grid-layout margin-top-35">
            <!--Freelancer -->
            <div class="freelancer">

              <!-- Overview -->
              <div class="freelancer-overview">
                <div class="freelancer-overview-inner">
                  <div class="freelancer-name">
                    <span>Smart and well trained Nanny with 15 years of experience. Taken care of 3 kids with a span of 3,7,5 years</span>
                  </div>
                  <!-- Rating -->
                  <div class="freelancer-rating">
                    <div class="star-rating" data-rating="4.9"></div>
                  </div>
                </div>
              </div>
              <!-- Details -->
              <div class="freelancer-details">
                <div class="freelancer-details-list">
                  <ul>
                    <li>Location <strong><i class="icon-material-outline-location-on"></i> India</strong></li>
                    <li>Rate <strong>Rs25000 / month</strong></li>
                    <li>Job Success <strong>95%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Freelancer / End -->

            <!--Freelancer -->
            <div class="freelancer">

              <!-- Overview -->
              <div class="freelancer-overview">
                <div class="freelancer-overview-inner">
                  <div class="freelancer-name">
                    <span>Smart and well trained Nanny with 15 years of experience. Taken care of 3 kids with a span of 3,7,5 years</span>
                  </div>
                  <!-- Rating -->
                  <div class="freelancer-rating">
                    <div class="star-rating" data-rating="4.9"></div>
                  </div>
                </div>
              </div>
              <!-- Details -->
              <div class="freelancer-details">
                <div class="freelancer-details-list">
                  <ul>
                    <li>Location <strong><i class="icon-material-outline-location-on"></i> Phillipines</strong></li>
                    <li>Rate <strong>Rs15000 / month</strong></li>
                    <li>Job Success <strong>75%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Freelancer / End -->

            <!--Freelancer -->
            <div class="freelancer">

              <!-- Overview -->
              <div class="freelancer-overview">
                <div class="freelancer-overview-inner">
                  <div class="freelancer-name">
                    <span>Smart and well trained Nanny with 15 years of experience. Taken care of 3 kids with a span of 3,7,5 years</span>
                  </div>
                  <!-- Rating -->
                  <div class="freelancer-rating">
                    <div class="star-rating" data-rating="4.9"></div>
                  </div>
                </div>
              </div>
              <!-- Details -->
              <div class="freelancer-details">
                <div class="freelancer-details-list">
                  <ul>
                    <li>Location <strong><i class="icon-material-outline-location-on"></i> India</strong></li>
                    <li>Rate <strong>Rs25000 / month</strong></li>
                    <li>Job Success <strong>95%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Freelancer / End -->

            <!--Freelancer -->
            <div class="freelancer">

              <!-- Overview -->
              <div class="freelancer-overview">
                <div class="freelancer-overview-inner">
                  <div class="freelancer-name">
                    <span>Smart and well trained Nanny with 15 years of experience. Taken care of 3 kids with a span of 3,7,5 years</span>
                  </div>
                  <!-- Rating -->
                  <div class="freelancer-rating">
                    <div class="star-rating" data-rating="4.9"></div>
                  </div>
                </div>
              </div>
              <!-- Details -->
              <div class="freelancer-details">
                <div class="freelancer-details-list">
                  <ul>
                    <li>Location <strong><i class="icon-material-outline-location-on"></i> India</strong></li>
                    <li>Rate <strong>Rs25000 / month</strong></li>
                    <li>Job Success <strong>95%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Freelancer / End -->

            <!--Freelancer -->
            <div class="freelancer">

              <!-- Overview -->
              <div class="freelancer-overview">
                <div class="freelancer-overview-inner">
                  <div class="freelancer-name">
                    <span>Smart and well trained Nanny with 15 years of experience. Taken care of 3 kids with a span of 3,7,5 years</span>
                  </div>
                  <!-- Rating -->
                  <div class="freelancer-rating">
                    <div class="star-rating" data-rating="4.9"></div>
                  </div>
                </div>
              </div>
              <!-- Details -->
              <div class="freelancer-details">
                <div class="freelancer-details-list">
                  <ul>
                    <li>Location <strong><i class="icon-material-outline-location-on"></i> India</strong></li>
                    <li>Rate <strong>Rs25000 / month</strong></li>
                    <li>Job Success <strong>95%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Freelancer / End -->

            <!--Freelancer -->
            <div class="freelancer">

              <!-- Overview -->
              <div class="freelancer-overview">
                <div class="freelancer-overview-inner">
                  <div class="freelancer-name">
                    <span>Smart and well trained Nanny with 15 years of experience. Taken care of 3 kids with a span of 3,7,5 years</span>
                  </div>
                  <!-- Rating -->
                  <div class="freelancer-rating">
                    <div class="star-rating" data-rating="4.9"></div>
                  </div>
                </div>
              </div>
              <!-- Details -->
              <div class="freelancer-details">
                <div class="freelancer-details-list">
                  <ul>
                    <li>Location <strong><i class="icon-material-outline-location-on"></i> India</strong></li>
                    <li>Rate <strong>Rs25000 / month</strong></li>
                    <li>Job Success <strong>95%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Freelancer / End -->
      
          </div>
          <!-- Freelancers Container / End -->


          <!-- Pagination -->
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-12">
              <!-- Pagination -->
              <div class="pagination-container margin-top-40 margin-bottom-60">
                <nav class="pagination">
                  <ul>
                    <li class="pagination-arrow"><a href="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></a></li>
                    <li><a href="#" class="ripple-effect">1</a></li>
                    <li><a href="#" class="current-page ripple-effect">2</a></li>
                    <li><a href="#" class="ripple-effect">3</a></li>
                    <li><a href="#" class="ripple-effect">4</a></li>
                    <li class="pagination-arrow"><a href="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <!-- Pagination / End -->

        </div>
      </div>
    </div>
    
  </div>

</template>

<script>
import { store } from '../store';
import Fortmatic from 'fortmatic';
import Header from '../components/Header.vue';
import { Marketplace } from "aave-js";

const MY_API_SECRET_KEY = "24183a163121aaec189ba29cc22e03136d475cf8096c311063";

const marketplace = new Marketplace(MY_API_SECRET_KEY);

export default {
  name: 'SponsorMatchup',
  data() {
    return {
    };
  },
  components: {
    Header
  },
  methods: {
    sendLendRequest() {
      const borrowerAddress = web3.eth.accounts[0]; // The wallet that creates the request
      const collateralAmount = 10000;
      const collateralType = "LEND";
      const loanCurrency = "ETH";
      // We get the maximum loan amount, depending on the Loan-To-Value ratio allowed
      marketplace
        .requests
        .getMaxLoanAmountFromCollateral(
            collateralAmount, 
            collateralType, 
            loanCurrency).then((maxLoanAmount) => {
                    const loanRequestParams = {
                        loanAmount: maxLoanAmount,
                        moe: loanCurrency,
                        collateralAmount: collateralAmount,
                        collateralType: collateralType,
                        mpr: 1.5,
                        duration: 4
                    }
                    marketplace.requests.create(borrowerAddress,loanRequestParams).then((tx) => {
                      console.log(tx);
                      //tx.params[0].value = web3.toWei(tx.params[0].value);
                      web3.eth.sendTransaction(tx.params[0]);
                    } );
        });
    },
    showSponsorStatus() {
      this.$router.push('sponsorstatus');
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 1em;
}
</style>