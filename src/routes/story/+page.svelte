<script lang="ts">
	import { isfixed } from "$lib/util/headerFixed";
	import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
	import { XSolid } from "svelte-awesome-icons";
    $isfixed = false
</script>

<div class="page-content h-screen">
		<div class="story-wrapper">
			<div class="user-profile">	
				<div class="flex items-center">
					<div class="media media-45">
						<img class="rounded" src="images/stories/small/pic1.jpg" alt="/">
					</div>
					<div class="user-info">
						<h6>Richard Sigh</h6>
						<small>4m ago</small>
					</div>
				</div>
				<a href="javascript:void(0);" class="back-btn">
                    <XSolid />
				</a>
			</div>
			<Splide class="story-wrapper" hasTrack={false} options={{arrows:false,focus:0,autoplay:true,perPage:1,height:"100vh",cover:true}}>
				<ul class="splide__pagination z-50 [&>li]:flex-auto gap-x-2"></ul>
				<SplideTrack>
					<SplideSlide>
						<img class="w-full h-full object-cover" src="images/stories/9.png" alt="">
					</SplideSlide>
					{#each [1,2,3] as item}
						<SplideSlide>
							<img class="w-full h-full object-cover" src="images/stories/pic{item}.png" alt="">
						</SplideSlide>
					{/each}
				</SplideTrack>
			</Splide>
			<div class="footer border-0 bg-black-gradient fixed">
				<div class="container">
					<div class="chat-footer style-1">
						<form>
							<div class="form-group boxed">
								<div class="input-wrapper message-area">
									<div class="append-media"></div>
									<input type="text" class="form-control" placeholder="Type message...">
									<a href="javascript:void(0);" class="btn btn-chat bg-transparent btn-icon btn-primary p-0 btn-rounded">
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
											<path d="M21.4499 11.11L3.44989 2.11C3.27295 2.0187 3.07279 1.9823 2.87503 2.00546C2.67728 2.02862 2.49094 2.11029 2.33989 2.24C2.18946 2.37064 2.08149 2.54325 2.02982 2.73567C1.97815 2.9281 1.98514 3.13157 2.04989 3.32L4.99989 12L2.09989 20.68C2.05015 20.8267 2.03517 20.983 2.05613 21.1364C2.0771 21.2899 2.13344 21.4364 2.2207 21.5644C2.30797 21.6924 2.42378 21.7984 2.559 21.874C2.69422 21.9496 2.84515 21.9927 2.99989 22C3.15643 21.9991 3.31057 21.9614 3.44989 21.89L21.4499 12.89C21.6137 12.8061 21.7512 12.6786 21.8471 12.5216C21.9431 12.3645 21.9939 12.184 21.9939 12C21.9939 11.8159 21.9431 11.6355 21.8471 11.4784C21.7512 11.3214 21.6137 11.1939 21.4499 11.11ZM4.70989 19L6.70989 13H16.7099L4.70989 19ZM6.70989 11L4.70989 5L16.7599 11H6.70989Z" fill="#fff"></path>
										</svg>
									</a>
								</div>
							</div>
						</form>
					</div>    
				</div>
			</div>
		</div>
    </div>	