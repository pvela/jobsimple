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

export default {
  name: 'joboffer',
  components: {
    Footer
	},
	methods: {
		nextPage: function () {
			this.$router.push('/onboarding');
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