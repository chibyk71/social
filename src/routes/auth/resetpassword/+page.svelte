<script lang="ts">
	import { isfixed } from '$lib/util/headerFixed';
    $isfixed = false
</script>

<!-- Welcome Start -->
	<div class="content-body">
		<div class="container h-screen">
			<div class="welcome-area">
				<div class="bg-image bg-image-overlay" style="background-image: url(images/login/pic6.jpg);"></div>
				<div class="join-area h-1/2">
					<div class="started">
						<h1 class="title">Forgot Password</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
					</div>
					<form>
						<div class="input-group form-item input-select items-center gap-0">
							<span class="input-group-text !pr-0 !border-r-0"> 
								<a href="javascript:void(0);">
									<select class="form-control custom-image-select-2 image-select rounded-r-none !border-r-0">
										<option data-thumbnail="images/flags/australia.png" selected>+61</option>
										<option data-thumbnail="images/flags/india.png">+91</option>
										<option data-thumbnail="images/flags/uae.png">+971</option>
										<option data-thumbnail="images/flags/us.png">+1</option>
									</select>
								</a>
							</span>
							<input type="number" class="form-control rounded-l-none !border-l-0" placeholder="Phone Number">
						</div>
					</form>	
					<div class="seprate-box mb-3">
						<a href="javascript:void(0);" class="back-btn">
							<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M4.40366 8L9.91646 2.58333L7.83313 0.499999L0.333132 8L7.83313 15.5L9.91644 13.4167L4.40366 8Z" fill="white"/>
							</svg>
						</a>
						<button type="submit" class="btn btn-primary btn-block text-center">NEXT</button>
					</div>
				</div>
			</div>
		</div>
	</div>
    <!-- Welcome End -->