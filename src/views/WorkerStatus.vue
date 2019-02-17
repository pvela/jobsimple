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
							<h3><i class="icon-material-outline-assignment"></i> My Listing</h3>
						</div>
            <span>Thanks for adding your employment listings</span>
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
                  <div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                    <a href="#small-dialog-1"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Accept Match Offer</a>
                    <a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
                    <a href="#" class="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
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

									<div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                    <a href="#small-dialog-1"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Accept Match Offer</a>
                    <a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
                    <a href="#" class="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
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
  name: 'workerstatus',
  components: {
    Footer
  }
}
</script>
