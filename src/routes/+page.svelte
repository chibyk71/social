<script>
	import Footer from './../lib/nav/footer.svelte';
	import PostCard from "$lib/comp/postCard.svelte";
	import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
	import Canvas from '$lib/comp/canvas.svelte';
	import { onMount } from 'svelte';
	import { canvas } from '$lib/comp/canvasStore';
	import SharePost from '$lib/comp/sharePost.svelte';

	onMount(()=>{
		canvas.open("pwa-install")
	})

</script>
<!-- Header -->
	<header class="header">
		<div class="container">
			<div class="main-bar">
				<div class="left-content">
					<h4 class="title !mb-0 text-xl/none font-semibold">Home</h4>
				</div>
				<div class="mid-content">
				</div>
				<div class="right-content flex items-center">
					<a href="/reels" class="bell-icon ml-2">
						<svg id="Layer_3" height="24" viewBox="0 0 22 22" width="24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"><g><path d="m-.0132 8v9a5.0018 5.0018 0 0 0 5 5h12a5.0018 5.0018 0 0 0 5-5v-9zm14.49 6.87-6 3.38a.9472.9472 0 0 1 -.49.13 1.0145 1.0145 0 0 1 -1-1v-6.76a1.0039 1.0039 0 0 1 1.49-.87l6 3.38a.9971.9971 0 0 1 0 1.74z"/><path d="m6.0968 6h-6.11v-1a4.9909 4.9909 0 0 1 2.27-4.19l1.19 1.62z"/><path d="m15.1068 6h-6.52l-2.96-4-1.44-1.93a4.2509 4.2509 0 0 1 .8-.07h5.72l1.46 2z"/><path d="m21.9868 5v1h-4.4l-2.95-4-1.47-2h3.82a5.0018 5.0018 0 0 1 5 5z"/></g></svg>
					</a>
					<a href="/notification" class="bell-icon ml-2">
						<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M6.99863 5.94146C8.25877 4.69837 9.96789 4 11.75 4C13.5321 4 15.2412 4.69837 16.5014 5.94146C17.7615 7.18456 18.4694 8.87057 18.4694 10.6286C18.4694 13.6602 19.1264 15.5253 19.7182 16.5956C20.0157 17.1336 20.3031 17.4826 20.498 17.6854C20.5957 17.7872 20.6709 17.853 20.7136 17.8881C20.7334 17.9044 20.7462 17.9141 20.751 17.9176C21.1638 18.1996 21.3462 18.7128 21.2002 19.1883C21.0523 19.6703 20.6019 20 20.0914 20H3.40862C2.89809 20 2.44774 19.6703 2.2998 19.1883C2.15385 18.7128 2.33617 18.1996 2.74898 17.9176C2.75364 17.9144 2.75833 17.9113 2.76305 17.9082L2.7604 17.9099L2.7558 17.913L2.74949 17.9173C2.74783 17.9185 2.74697 17.9191 2.74688 17.9192C2.74681 17.9192 2.7472 17.9189 2.74803 17.9183C2.7483 17.9181 2.74862 17.9179 2.74898 17.9176C2.75375 17.9141 2.76657 17.9044 2.78642 17.8881C2.82906 17.853 2.90431 17.7872 3.00203 17.6854C3.19687 17.4826 3.48428 17.1336 3.78178 16.5956C4.37359 15.5253 5.03055 13.6602 5.03055 10.6286C5.03055 8.87056 5.73849 7.18456 6.99863 5.94146ZM2.76305 17.9082C2.76307 17.9082 2.76308 17.9081 2.7631 17.9081L2.76306 17.9082L2.76305 17.9082ZM17.6975 17.7143C17.693 17.7063 17.6886 17.6982 17.6841 17.6901C16.8857 16.2461 16.1524 13.997 16.1524 10.6286C16.1524 9.47677 15.6886 8.37215 14.863 7.55771C14.0374 6.74326 12.9176 6.28571 11.75 6.28571C10.5824 6.28571 9.46264 6.74326 8.63703 7.55771C7.81143 8.37215 7.3476 9.47677 7.3476 10.6286C7.3476 13.997 6.61433 16.2461 5.81591 17.6901C5.81144 17.6982 5.80697 17.7063 5.8025 17.7143H17.6975ZM2.7645 17.9072C2.7645 17.9072 2.7645 17.9072 2.76449 17.9072L2.76425 17.9074C2.76434 17.9073 2.76442 17.9073 2.7645 17.9072Z" fill="#FE9063"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.87713 21.1933C9.47825 20.797 10.2482 21.0296 10.5969 21.7127C10.6633 21.8427 10.7586 21.9506 10.8732 22.0256C10.9878 22.1006 11.1177 22.1401 11.25 22.1401C11.3823 22.1401 11.5122 22.1006 11.6268 22.0256C11.7414 21.9506 11.8367 21.8427 11.9031 21.7127C12.2518 21.0296 13.0217 20.797 13.6229 21.1933C14.224 21.5895 14.4286 22.4646 14.0799 23.1477C13.7923 23.7111 13.3795 24.1787 12.8829 24.5038C12.3862 24.8289 11.8231 25 11.25 25C10.6769 25 10.1138 24.8289 9.61711 24.5038C9.12045 24.1787 8.70767 23.7111 8.42008 23.1477C8.07138 22.4646 8.27601 21.5895 8.87713 21.1933Z" fill="#FE9063"/>
							<circle cx="18" cy="6" r="5" fill="url(#paint0_linear_8_1045)" stroke="#FEEADF" stroke-width="2"/>
							<defs>
							<linearGradient id="paint0_linear_8_1045" x1="15.8934" y1="-5.17647" x2="23.3834" y2="-3.59332" gradientUnits="userSpaceOnUse">
							<stop stop-color="#704FFE"/>
							<stop offset="1" stop-color="#523CAD"/>
							</linearGradient>
							</defs>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</header>
	<div class="dark-overlay"></div>
    <!-- Header End -->

	 <!-- Page Content -->
    <div class="page-content">
        <div class="content-inner !pt-0">
			<div class="container pb-12">
				<!-- STORY -->
				<div class="author-notification mb-6 px-4">
					<div class="-mx-6 my-0">
						<Splide  hasTrack={false} options={{perPage:5,arrows:false,pagination:!1,gap:15}}>
							<SplideTrack>
								<SplideSlide>
									<a href="story.html" class="categore-box style-1">
										<div class="story-bx">
											<img src="images/stories/small/pic8.jpg" alt="/">
											<div class="add-box">
												<i class="fa-solid fa-plus"></i>
											</div>
										</div>
										<span class="detail">Your Story</span>
									</a>
								</SplideSlide>
								{#each [1,2,3,4,5,6,7,8,9] as item}
									<SplideSlide>
										<a href="live-story.html" class="categore-box">
											<div class="story-bx">
												<img src="images/stories/small/pic{item}.jpg" alt="/">
												<div class="live-text">Live</div>
											</div>
											<span class="detail">Emilia</span>
										</a>
									</SplideSlide>
								{/each}
							</SplideTrack>
						</Splide>
					</div>
				</div>
				<!-- STORY -->
                <div class="post-area">
					<div class="post-card">
						<div class="top-meta">
							<div class="flex justify-between items-start">
								<a href="user-profile.html" class="media media-40">
									<img class="rounded" src="images/stories/small/pic4.jpg" alt="/">
								</a>
								<div class="meta-content ms-3">
									<h6 class="title mb-0"><a href="user-profile.html">Lucas Mokmana</a></h6>
									<ul class="meta-list">
										<li>
											<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.25 5.83331C12.25 9.91665 7 13.4166 7 13.4166C7 13.4166 1.75 9.91665 1.75 5.83331C1.75 4.44093 2.30312 3.10557 3.28769 2.121C4.27226 1.13644 5.60761 0.583313 7 0.583313C8.39239 0.583313 9.72774 1.13644 10.7123 2.121C11.6969 3.10557 12.25 4.44093 12.25 5.83331Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M7 7.58331C7.9665 7.58331 8.75 6.79981 8.75 5.83331C8.75 4.86681 7.9665 4.08331 7 4.08331C6.0335 4.08331 5.25 4.86681 5.25 5.83331C5.25 6.79981 6.0335 7.58331 7 7.58331Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>	
											Bangkok, Thailand
										</li>
										<li>2m ago</li>
									</ul>
								</div>
							</div>
							<a href="javascript:void(0);" class="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom1" aria-controls="offcanvasBottom">
								<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z" fill="#E4BEAB"/>
								</svg>
							</a>
						</div>
						<p class="text-black">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit emat 😎😎
						</p>
						<div class="dz-media">
							<img src="images/post/pic1.png" alt="/">
							<div class="post-meta-btn">
								<ul>
									<li>
										<a href="javascript:void(0);" class="action-btn bg-primary">
											<i class="fa-regular fa-heart fill-icon"></i>
											<i class="fa-solid fa-heart fill-icon-2"></i>
											<h6 class="font-14 mb-0 ms-2" id="value1">221</h6>
										</a>
									</li>
									<li>
										<a href="comment.html" class="action-btn bg-secondary">
											<i class="fa-solid fa-comment fill-icon"></i>
											<h6 class="font-14 mb-0 ms-2">150</h6>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<PostCard />
					<div class="post-card">
						<div class="top-meta">
							<div class="d-flex justify-content-between align-items-start">
								<a href="user-profile.html" class="media media-40">
									<img class="rounded" src="assets/images/stories/small/pic2.jpg" alt="/">
								</a>
								<div class="meta-content ms-3">
									<h6 class="title mb-0"><a href="user-profile.html">Thomas Edison</a></h6>
									<ul class="meta-list">
										<li>
											<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.25 5.83331C12.25 9.91665 7 13.4166 7 13.4166C7 13.4166 1.75 9.91665 1.75 5.83331C1.75 4.44093 2.30312 3.10557 3.28769 2.121C4.27226 1.13644 5.60761 0.583313 7 0.583313C8.39239 0.583313 9.72774 1.13644 10.7123 2.121C11.6969 3.10557 12.25 4.44093 12.25 5.83331Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M7 7.58331C7.9665 7.58331 8.75 6.79981 8.75 5.83331C8.75 4.86681 7.9665 4.08331 7 4.08331C6.0335 4.08331 5.25 4.86681 5.25 5.83331C5.25 6.79981 6.0335 7.58331 7 7.58331Z" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>	
											Bangkok, Thailand
										</li>
										<li>2m ago</li>
									</ul>
								</div>
							</div>
							<a href="javascript:void(0);" class="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom1" aria-controls="offcanvasBottom">
								<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.7566 4.93237L9.60021 0.182841C9.14886 -0.23294 8.4375 0.104591 8.4375 0.750465V3.25212C3.73157 3.30959 0 4.31562 0 9.07267C0 10.9927 1.1596 12.8948 2.4414 13.8893C2.84139 14.1996 3.41145 13.8101 3.26397 13.3071C1.93553 8.77542 3.89405 7.57236 8.4375 7.50264V10.25C8.4375 10.8969 9.14942 11.2329 9.60021 10.8176L14.7566 6.06761C15.0809 5.7688 15.0814 5.23158 14.7566 4.93237Z" fill="#E4BEAB"/>
								</svg>
							</a>
						</div>
						<p class="text-black">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit emat 😎😎
						</p>
						<div class="dz-media">
							<img src="assets/images/post/pic8.png" alt="/">
							<div class="post-meta-btn">
								<ul>
									<li>
										<a href="javascript:void(0);" class="action-btn bg-primary">
											<i class="fa-regular fa-heart fill-icon"></i>
											<i class="fa-solid fa-heart fill-icon-2"></i>
											<h6 class="font-14 mb-0 ms-2" id="value1">221</h6>
										</a>
									</li>
									<li>
										<a href="comment.html" class="action-btn bg-secondary">
											<i class="fa-solid fa-comment fill-icon"></i>
											<h6 class="font-14 mb-0 ms-2">150</h6>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>    
		</div>
    </div>    
    <!-- Page Content End-->
	
	<Footer />

	<!-- PWA Offcanvas -->

	<Canvas class="pwa-offcanvas" small={true} drag={false} id="pwa-install">
		<svelte:fragment slot="body">
			<div class="container">
			<img class="logo" src="images/icon.png" alt="">
			<h5 class="title">Soziety on Your Home Screen</h5>
			<p class="pwa-text">Install Soziety social network mobile app template to your home screen for easy access, just like any other app</p>
			<button type="button" class="btn btn-sm btn-primary pwa-btn">Add to Home Screen</button>
			<button type="button" class="btn btn-sm pwa-close light btn-secondary ml-2">Maybe later</button>
			</div>
		</svelte:fragment>
	</Canvas>
	<!-- PWA Offcanvas End -->

	<SharePost />