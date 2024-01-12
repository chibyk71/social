<script>

	import Canvas from "./canvas.svelte";

</script>

<Canvas id="share-post">
    <svelte:fragment slot="head">
        <form class="w-full">
            <input type="text" class="form-control w-full border-primary border-0 focus:border" placeholder="Write a message ..."/>
        </form>
    </svelte:fragment>
    <svelte:fragment slot="body">
        <form>
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Search..">
					<span class="input-group-text absolute right-0.5 top-0.5"> 
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z" fill="#FE9063"></path>
						</svg>
					</span>
				</div>
			</form>
			<div class="canvas-height mt-4 dz-scroll">
				<ul class="share-list">
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic1.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Andy Lee</h6>
								<span class="username">mr_andy_lee</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic2.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Brian Harahap</h6>
								<span class="username">brian_harahap</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic3.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Christian Hang</h6>
								<span class="username">christian_Hang</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic4.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Chloe Mc. Jenskin</h6>
								<span class="username">chloe_mc_jenskin</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic5.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">David Bekam</h6>
								<span class="username">david_bekam</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic6.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Donas High</h6>
								<span class="username">donas_high</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic7.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Lee Comfort</h6>
								<span class="username">lee_comfort</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic8.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Michel Evon</h6>
								<span class="username">michel_evon</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic4.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Yatin</h6>
								<span class="username">yatin_325</span>
							</a>	
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
					<li>
						<div class="left-content">
							<a href="user-profile.html"><img src="images/stories/small/pic3.jpg" alt="/"></a>
							<a href="user-profile.html">
								<h6 class="name">Tushar</h6>
								<span class="username">Tjangid_293</span>
							</a>
						</div>
						<a href="javascript:void(0);" class="btn btn-primary btn-sm">Send</a>
					</li>
				</ul>
			</div>
    </svelte:fragment>
</Canvas>