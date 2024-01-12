<script lang="ts">
	import { isfixed } from '$lib/util/headerFixed';
	import { onMount } from 'svelte';
    import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
    let loaded = false;
    export let data: PageData;

    $isfixed = false
    onMount(()=> loaded = true)
</script>

   {#if !loaded}
     <!-- splash -->        
        <div class="loader-screen" id="splashscreen" out:fade>
            <div class="main-screen">
                <div class="circle-2"></div>
                <div class="circle-3"></div>
                <div class="circle-4"></div>
                <div class="circle-5"></div>
                <div class="circle-6"></div>
                <div class="brand-logo">
                    <div class="logo">
                        <img src="images/vector.svg" alt="spoon-1" class="wow bounceInDown">
                    </div>
                    <div id="loading-area" class="loading-page-4">
                    <div class="loading-inner">
                        <div class="load-text">
                            <span data-text="S" class="text-load">S</span>
                            <span data-text="O" class="text-load">O</span>
                            <span data-text="Z" class="text-load">Z</span>
                            <span data-text="I" class="text-load">I</span>
                            <span data-text="E" class="text-load">E</span>
                            <span data-text="T" class="text-load">T</span>
                            <span data-text="Y" class="text-load">Y</span>
                            <span data-text="." class="text-load text-primary">.</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>                                        
        </div>                                        
 	<!-- splash-->
   {/if}

    <!-- Welcome Start -->
	<div class="content-body">
		<div class="container h-screen">
			<div class="welcome-area">
				<div class="bg-image bg-image-overlay" style="background-image: url(images/login/pic1.jpg);"></div>
				<div class="join-area">
					<div class="mb-3">
                        <Splide hasTrack={false} class="get-started" options={{arrows:false,autoplay:true}}>
                            <SplideTrack>
                                <SplideSlide>
                                    <div class="started">
										<h1 class="title">Hello, And Welcome to Soziety.</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="started">
										<h1>People's First Prefrence Is Soziety</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="started">
										<h1 class="title">Hello, And Welcome to Soziety.</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
                                </SplideSlide>
                            </SplideTrack>
                            <div class="swiper-btn">
                                <ul class="splide__pagination style-1 flex-1"></ul>
                            </div>
                        </Splide>
					</div>
					<a href="register.html" class="btn btn-primary btn-block mb-3 text-center">CREATE ACCOUNT</a>
					<a href="login.html" class="btn btn-light btn-block mb-3 text-center">SIGN IN</a>
					<a href="forgot-password.html" class="text-light text-center block">Forgot your account?</a>
				</div>
			</div>
		</div>
	</div>
    <!-- Welcome End -->