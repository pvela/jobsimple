<template>
  <div class="home">
    <!-- Dashboard Content
	================================================== -->
	<div class="dashboard-content-container" data-simplebar>
		<div class="dashboard-content-inner" >
			
			<!-- Dashboard Headline -->
			<div class="dashboard-headline">
				<h3>Manage Interested Workers</h3>
				<span class="margin-top-7">Matches for <a href="#">Mason</a></span>
			</div>
	
			<!-- Row -->
			<div class="row">

				<!-- Dashboard Box -->
				<div class="col-xl-12">
					<div class="dashboard-box margin-top-0">

						<!-- Headline -->
						<div class="headline">
							<h3><i class="icon-material-outline-supervisor-account"></i> 3 Matches</h3>
							<div class="sort-by">
								<select class="selectpicker hide-tick">
									<option>Highest First</option>
									<option>Lowest First</option>
									<option>Fastest First</option>
								</select>
							</div>
						</div>

						<div class="content">
							<ul class="dashboard-box-list">
								<li>
									<!-- Overview -->
									<div class="freelancer-overview manage-candidates">
										<div class="freelancer-overview-inner">

											<!-- Avatar -->
											<div class="freelancer-avatar">
												<div class="verified-badge"></div>
												<a href="#"><img src="images/user-avatar-big-02.jpg" alt=""></a>
											</div>

											<!-- Name -->
											<div class="freelancer-name">
												<h4><a href="#">Raj Kannan</a></h4>

												<!-- Details -->
												<span class="freelancer-detail-item"><a href="#"><i class="icon-feather-phone"></i> +91-44-234-5645</a></span>

												<!-- Rating -->
												<div class="freelancer-rating">
													<div class="star-rating" data-rating="5.0"></div>
												</div>

												<!-- Bid Details -->
												<ul class="dashboard-task-info bid-info">
													<li><strong>Rs30,200</strong><span>Salary</span></li>
													<li><strong>14 Days</strong><span>Available</span></li>
												</ul>

												<!-- Buttons -->
												<div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
													<router-link to="/joboffer"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Hire Worker</router-link>
                          <router-link to="#"  class="popup-with-zoom-anim button ripple-effect"> Reject Worker</router-link>
													<a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
													<a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li>
									<!-- Overview -->
									<div class="freelancer-overview manage-candidates">
										<div class="freelancer-overview-inner">

											<!-- Avatar -->
											<div class="freelancer-avatar">
												<a href="#"><img src="images/user-avatar-placeholder.png" alt=""></a>
											</div>

											<!-- Name -->
											<div class="freelancer-name">
												<h4><a href="#">Meena Nair </a></h4>

												<!-- Details -->
												<span class="freelancer-detail-item"><a href="#"><i class="icon-feather-phone"></i>91-234-567-4568</a></span>

												<!-- Rating -->
												<br>
												<span class="company-not-rated">Minimum of 3 votes required</span>

												<!-- Bid Details -->
												<ul class="dashboard-task-info bid-info">
													<li><strong>Rs30,000</strong><span>Salary</span></li>
													<li><strong>14 Days</strong><span>Available Time</span></li>
												</ul>

												<!-- Buttons -->
												<div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
													<a class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Setup Interview</a>
													<a class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
													<a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li>
									<!-- Overview -->
									<div class="freelancer-overview manage-candidates">
										<div class="freelancer-overview-inner">

											<!-- Avatar -->
											<div class="freelancer-avatar">
												<div class="verified-badge"></div>
												<a href="#"><img src="images/user-avatar-placeholder.png" alt=""></a>
											</div>

											<!-- Name -->
											<div class="freelancer-name">
												<h4><a href="#">Vel Murugan</a></h4>

												<!-- Details -->
												<span class="freelancer-detail-item"><i class="icon-feather-phone"></i> +91-44-12356-789</span>

												<!-- Rating -->
												<div class="freelancer-rating">
													<div class="star-rating" data-rating="5.0"></div>
												</div>

												<!-- Bid Details -->
												<ul class="dashboard-task-info bid-info">
													<li><strong>Rs20,700</strong><span>Salary</span></li>
													<li><strong>30 Days</strong><span>Available Time</span></li>
												</ul>

												<!-- Buttons -->
												<div class="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                          <a href="#small-dialog-1"  class="popup-with-zoom-anim button ripple-effect"><i class="icon-material-outline-check"></i> Setup Interview</a>
													<a href="#small-dialog-2" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
													<a href="#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
												</div>
											</div>
										</div>
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
	<!-- Dashboard Content / End -->
  </div>
</template>

<script>
// @ is an alias to /src
/* const toAddress = '0x2186F17f32b9bb57B5823E4b1C47Db32EB3B0674';
const sendValue = web3.toWei('0.1', 'ether');
web3.eth.sendTransaction({
	from: web3.eth.accounts[0],
	to: toAddress,
	value: sendValue
}); */
export default {
  name: 'sponsorstake',
  methods: {
    send() {
      
    }
  }
}
</script>
