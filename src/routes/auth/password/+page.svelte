<script lang="ts">
	import { isfixed } from '$lib/util/headerFixed';

	// import TopBar from '$lib/nav/topBar.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    $isfixed = false
</script>
<!-- <TopBar title="change password" /> -->

<!-- Welcome Start -->
	<div class="content-body">
		<div class="container h-screen">
			<div class="welcome-area">
				<div class="bg-image bg-image-overlay" style="background-image: url(images/login/pic2.jpg);"></div>
				<div class="join-area">
					<div class="started">
						<h1 class="title">Change Password</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
					</div>
					<form>
						<div class="mb-3 input-group input-group-icon">
							<span class="input-group-text absolute left-0.5 top-0.5">
								<div class="input-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z" fill="white"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z" fill="white"></path>
									</svg>
								</div>
							</span>
							<input type="password" class="form-control !pl-12 block w-full dz-password" placeholder="New Password">
							<span class="input-group-text show-pass"> 
								<i class="fa fa-eye-slash text-primary"></i>
								<i class="fa fa-eye text-primary"></i>
							</span>
						</div>
						<div class="mb-3 input-group input-group-icon">
							<span class="input-group-text absolute left-0.5 top-0.5">
								<div class="input-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z" fill="white"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z" fill="white"></path>
									</svg>
								</div>
							</span>
							<input type="password" class="form-control !pl-12 block w-full dz-password" placeholder="Confirm Password">
							<span class="input-group-text show-pass"> 
								<i class="fa fa-eye-slash text-primary"></i>
								<i class="fa fa-eye text-primary"></i>
							</span>
						</div>
					</form>
					<button type="submit" class="btn btn-primary mb-3 btn-block text-center">SUBMIT</button>
					<div class="flex items-center justify-center">
						<a href={void(0)} class="text-light text-center block">Don’t have an account?</a>
						<a href="/register" class="btn-link block ml-2 text-underline">SignUp here</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    <!-- Welcome End -->