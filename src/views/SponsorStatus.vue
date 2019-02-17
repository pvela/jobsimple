<template>
  <div class="home">
  <br/>
    <div class="dashboard-content-container" data-simplebar>
			<div class="dashboard-content-inner" >
		
				<!-- Row -->
				<div class="row">

					<!-- Dashboard Box -->
					<div class="col-xl-12">
						<div class="dashboard-box margin-top-0">

							<!-- Headline -->
							<div class="headline">
								<h2 class="section-header"><i class="icon-material-outline-assignment"></i> 
									Job Dashboard</h2>
								<h3>Thanks for submitting an employee request!</h3>
							</div>
							<div class="content">
								<ul class="dashboard-box-list">
									<li>
										<!-- Job Listing -->
										<div class="job-listing width-adjustment">

											<!-- Job Listing Details -->
											<div class="job-listing-details">

												<!-- Details -->
												<div class="job-listing-description">
													<h3 class="job-listing-title"><a href="#">Mason</a> </h3>

													<!-- Job Listing Footer -->
													<div class="job-listing-footer">
														<ul>
															<li><i class="icon-material-outline-access-time"></i> 30 days left</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										
										<!-- Task Details -->
										<ul class="dashboard-task-info">
											<li><strong>0</strong><span>Interests</span></li>
											<li><strong>0</strong><span>Avg. Pay</span></li>
										</ul>

										<!-- Buttons -->
										<div class="buttons-to-right always-visible">
											<a href="#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
											<a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
										</div>
									</li>

									<li>
										<!-- Job Listing -->
										<div class="job-listing width-adjustment">

											<!-- Job Listing Details -->
											<div class="job-listing-details">

												<!-- Details -->
												<div class="job-listing-description">
													<h3 class="job-listing-title"><a href="#">Welder</a></h3>

													<!-- Job Listing Footer -->
													<div class="job-listing-footer">
														<ul>
															<li><i class="icon-material-outline-access-time"></i> 6 days, 23 hours left</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<!-- Task Details -->
										<ul class="dashboard-task-info">
											<li><strong>2</strong><span>Interests</span></li>
											<li><strong>Rs18000</strong><span>Avg. Pay</span></li>
										</ul>

										<!-- Buttons -->
										<div class="buttons-to-right always-visible">
											<router-link to="sponsorstake" class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Stake to Interview</router-link>
											<a href="#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
											<a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
										</div>
									</li>

								</ul>
							</div>
						</div>
					</div>

				</div>
				<!-- Row / End -->
			</div>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';

export default {
  name: 'sponsorstatus',
  components: {
   Footer
  },
  methods: {
    showStake() {
      this.$router.push('sponsorstake');
    }
  }
}
</script>

<style scoped>
.section-header {
	color: #00F;
	font-size: 2em;
}
</style>