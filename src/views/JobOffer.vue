<template>
  <div class="home">
  <div class="dashboard-content-container" data-simplebar>
		<div class="dashboard-content-inner" >
			
    <!-- Row -->
			<div class="row">

				<!-- Dashboard Box -->
				<div class="col-xl-6">
					<div class="dashboard-box">
						<div class="headline">
							<h2 class="section-header"><i class="icon-material-baseline-notifications-none"></i> Employment Benefits</h2>
							<button class="mark-as-read ripple-effect-dark" data-tippy-placement="left" title="Mark all as read">
									<i class="icon-feather-check-square"></i>
							</button>
						</div>
						<div class="content">
							<ul class="dashboard-box-list">
								<li>
									<span class="notification-text">
										Salary : Rs30000 per month <br/>
                    Overtime: Rs500 per hour<br/>
                    Bonus : 1 month salary on Anniversary<br/>
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span class="notification-text">
										Vacation : Sunday (everyweek) and Local Government Holidays<br/>
                    Sick Leave: 5 days in a year<br/>
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span class="notification-text">
										Health Insurance : Standard Policy will be paid by sponsor
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
                <li>
									<span class="notification-text">
										Housing : Accommodation provided
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<input type="checkbox" /><span class="red">You must accept to continue the preboarding process</span>
				</div>

				<!-- Dashboard Box -->
				<div class="col-xl-6">
					<div class="dashboard-box">
						<div class="headline">
							<h2 class="section-header"><i class="icon-material-outline-assignment"></i> Preboarding Checklist</h2>
						</div>
							<div class="content">
							<ul class="dashboard-box-list">
                <li>
									<span class="notification-text">
										Financial Support
                    <button  @click.prevent="sendLendRequest" class="button full-width button-sliding-icon ripple-effect margin-top-10"  form="login-form">Request Loan from ETHLend<i class="icon-material-outline-arrow-right-alt"></i></button>
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span class="notification-text">
										Health Check Certificate
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span class="notification-text">
										Passport <br/>
                    Visa/ Work Permit
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
								<li>
									<span class="notification-text">
										Travel Arrangement (Tickets, Hotel, Meals)
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
                <li>
									<span class="notification-text">
										Training
									</span>
									<!-- Buttons -->
									<div class="buttons-to-right">
										<a href="#" class="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i class="icon-feather-check-square"></i></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<input type="checkbox" /><span class="red">Click if completed all preboarding tasks</span>
				</div>

			</div>
			<!-- Row / End -->
      </div>
    </div>
			
		<button class="btn btn-primary btn-lg btn-continue" @click="nextPage">Continue</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';
import { Marketplace } from "aave-js";
const MY_API_SECRET_KEY = "24183a163121aaec189ba29cc22e03136d475cf8096c311063";

const marketplace = new Marketplace(MY_API_SECRET_KEY);

export default {
  name: 'joboffer',
  components: {
    Footer
	},
	methods: {
		nextPage: function () {
			this.$router.push('/onboarding');
		},
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
    }
	}
}
</script>

<style scoped>
.section-header {
	color: #00F;
}

.content {
	font-size: 1.8em;
	font-weight: 700;
}

.red {
	color: #F00;
}

.btn-continue {
	margin-top: 2em;
}
</style>