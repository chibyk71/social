<script lang="ts">
    import '@splidejs/svelte-splide/css/splide.min.css';
    import "../app.postcss"
	import { isfixed } from '$lib/util/headerFixed';
	import Canvas from '$lib/comp/canvas.svelte';

	export let data;
</script>

<div class="page-wraper" class:header-fixed={$isfixed}> 
    <slot />
</div>
    <Canvas position="top" drag={false} id="login">
		<svelte:fragment slot="head">
			<h5 class="offcanvas-title">Login</h5>
		</svelte:fragment>
		<svelte:fragment slot="body">
			<form>
				<div class="mb-3 input-group input-group-icon">
					<span class="input-group-text">
						<div class="input-icon">
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
								<path d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</span>
					<input type="email" class="form-control" placeholder="Email Address">
				</div>
				<div class="mb-3 input-group input-group-icon">
					<span class="input-group-text">
						<div class="input-icon">
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
								<path d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</span>
					<input type="text" class="form-control" placeholder="Phone Number">
				</div>
				<button type="submit" class="btn btn-primary btn-block mb-2">Login</button>
			</form>
		</svelte:fragment>
	</Canvas>