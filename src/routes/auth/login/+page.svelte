<script lang="ts">
	import { enhance } from '$app/forms';
	import { isfixed } from '$lib/util/headerFixed';
    import type { PageData } from './$types';
    
    export let data: PageData;
	export let form

	$: console.log(form);
	
    $isfixed = false
</script>
 <!-- Welcome Start -->
	<div class="content-body">
		<div class="container h-screen">
			<div class="welcome-area">
				<div class="bg-image bg-image-overlay" style="background-image: url(images/login/pic4.jpg);"></div>
				<div class="join-area">
					<div class="started">
						<h1 class="title">Sign in</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
					</div>
					<form action="auth/login?/loginUser" method="post" use:enhance id="login">
						<div class="mb-3 input-group input-group-icon">
							<span class="input-group-text top-0.5 left-0.5 absolute">
								<div class="input-icon">
									<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
										<path d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</div>
							</span>
							<input type="email" name="email" class="form-control w-full !pl-12" placeholder="Email">
						</div>
						<div class="mb-3 input-group input-group-icon">
							<span class="input-group-text top-0.5 left-0.5 absolute">
								<div class="input-icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z" fill="white"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z" fill="white"></path>
									</svg>
								</div>
							</span>
							<input type="password" name="password" class="form-control w-full !pl-12 dz-password" placeholder="Password">
							<span class="input-group-text show-pass"> 
								<i class="fa fa-eye-slash text-primary"></i>
								<i class="fa fa-eye text-primary"></i>
							</span>
						</div>
					</form>
					<a href="forgotpassword" class="btn-link block mb-3 text-end text-underline">Forgot Password</a>	
					<button form="login" type="submit" class="btn btn-primary btn-block mb-3">SIGN IN</button>
					<div class="social-box">
						<span>Or sign in with</span>
						<div class="flex justify-between">
							<img src="images/icons/facebook.png" alt="/">
							<img src="images/icons/google.png" alt="/">
						</div>
					</div>	
					<div class="flex items-center justify-center">
						<a href="javascript:void(0);" class="text-light text-center block">Don’t have an account?</a>
						<a href="register.html" class="btn-link block ml-3 text-underline">Signup here</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    <!-- Welcome End -->