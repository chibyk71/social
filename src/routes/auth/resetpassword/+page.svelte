<script lang="ts">
	import { enhance } from '$app/forms';
	import { goBack } from '$lib/util/backBtn';
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
					<form method="post" use:enhance id="reset">
						<div class="input-group form-item input-select items-center gap-0">
							<input type="email" name="email" class="form-control" placeholder="Enter Registered Email">
						</div>
					</form>	
					<div class="seprate-box mb-3">
						<a href={void(0)} class="back-btn" use:goBack>
							<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M4.40366 8L9.91646 2.58333L7.83313 0.499999L0.333132 8L7.83313 15.5L9.91644 13.4167L4.40366 8Z" fill="white"/>
							</svg>
						</a>
						<button form="reset" type="submit" class="btn btn-primary btn-block text-center">NEXT</button>
					</div>
				</div>
			</div>
		</div>
	</div>
    <!-- Welcome End -->