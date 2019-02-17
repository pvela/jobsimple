<template>
<div id="wrapper">
  <div class="container page">
    <h1 class="page-header">Sponsor</h1>
    <h2 class="page-subheader">Step 3: Pick any to proceed to interview</h2>

    <div class="row">
      <div>
        <!-- Freelancers List Container -->
        <div class="freelancers-container freelancers-grid-layout margin-top-35">
          <!--Freelancer -->
          <div class="freelancer" id="first" v-on:click="select($event)">

            <!-- Overview -->
            <div class="freelancer-overview">
              <div class="freelancer-overview-inner">
                <div class="freelancer-name">
                  <span>Skilled roofer with 5 years experience leading construction crews on 
                    roofing projects.</span>
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
          <div class="freelancer" id="second" v-on:click="select($event)">

            <!-- Overview -->
            <div class="freelancer-overview">
              <div class="freelancer-overview-inner">
                <div class="freelancer-name">
                  <span>Carpenter with 3 years experience working on large residential projects 
                    in Dubai.</span>
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
          <div class="freelancer" id="third" v-on:click="select($event)">

            <!-- Overview -->
            <div class="freelancer-overview">
              <div class="freelancer-overview-inner">
                <div class="freelancer-name">
                  <span>Construction worker with experience working with heavy machinery.</span>
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
                  <li>Location <strong><i class="icon-material-outline-location-on"></i> Kuwait</strong></li>
                  <li>Rate <strong>Rs25000 / month</strong></li>
                  <li>Job Success <strong>93%</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Freelancer / End -->

          <!--Freelancer -->
          <div class="freelancer" id="fourth" v-on:click="select($event)">

            <!-- Overview -->
            <div class="freelancer-overview">
              <div class="freelancer-overview-inner">
                <div class="freelancer-name">
                  <span>Assistant roofer with 1 year of experience working on large industrial
                    buildings with metal roofing.
                  </span>
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
                  <li>Job Success <strong>87%</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Freelancer / End -->

          <!--Freelancer -->
          <div class="freelancer" id="fifth" v-on:click="select($event)">

            <!-- Overview -->
            <div class="freelancer-overview">
              <div class="freelancer-overview-inner">
                <div class="freelancer-name">
                  <span>Lead electrician with experience leading teams wiring residential 
                    building projects.</span>
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
                  <li>Job Success <strong>96%</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Freelancer / End -->

          <!--Freelancer -->
          <div class="freelancer" id="sixth" v-on:click="select($event)">

            <!-- Overview -->
            <div class="freelancer-overview">
              <div class="freelancer-overview-inner">
                <div class="freelancer-name">
                  <span>Plumber with 4 years experience on new construction projects in 
                    Saudi Arabia.</span>
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
                  <li>Location <strong><i class="icon-material-outline-location-on"></i> Bangladesh</strong></li>
                  <li>Rate <strong>Rs25000 / month</strong></li>
                  <li>Job Success <strong>91%</strong></li>
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
import { Marketplace } from "aave-js";

const MY_API_SECRET_KEY = "24183a163121aaec189ba29cc22e03136d475cf8096c311063";

const marketplace = new Marketplace(MY_API_SECRET_KEY);

export default {
  name: 'SponsorMatchup',
  data() {
    return {
    };
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
    },
    select: function(event) {
      var targetId = event.currentTarget.id;
      console.log(targetId);
      this.$router.push('/sponsorstatus');
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 1em;
}

.page {
  padding-top: 4em;
}

.page-header {
  margin-bottom: 0.5em;
}

.page-subheader {
  margin-bottom: 3em;
}
</style>