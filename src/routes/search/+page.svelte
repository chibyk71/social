<script lang="ts">
	import Footer from '$lib/nav/footer.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

 <!-- Header -->
	<header class="header">
		<div class="container">
			<form class="my-3">
				<div class="input-group">
					<input type="text" class="form-control pr-14" placeholder="Search..">
					<span class="input-group-text absolute right-0.5 top-0.5"> 
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z" fill="var(--primary)"/>
						</svg>
					</span>
				</div>
			</form>
		</div>
	</header>
    <!-- Header End -->
    
    <!-- Page Content -->
    <div class="page-content">
        <div class="content-inner pt-0">
			<div class="container">
				<div class="photo-viewer">
					<ul class="list">
						<li>
							<a href="explore.html">
								<img src="images/post/pic5.png" alt="/">
							</a>
						</li>
						<li>
							<ul>
								<li>
									<a href="explore.html">
										<img src="images/post/pic1.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic2.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic3.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic4.png" alt="/">
									</a>
								</li>	
							</ul>
						</li>
					</ul>	
					<ul class="list">
						<li>
							<a href="explore.html">
								<img src="images/post/pic6.png" alt="/">
							</a>
						</li>
						<li>
							<ul>
								<li>
									<a href="explore.html">
										<img src="images/post/pic7.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic8.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic9.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic10.png" alt="/">
									</a>
								</li>	
							</ul>
						</li>
					</ul>
					<ul class="list">
						<li>
							<a href="explore.html">
								<img src="images/post/pic11.png" alt="/">
							</a>
						</li>
						<li>
							<ul>
								<li>
									<a href="explore.html">
										<img src="images/post/pic2.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic5.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic3.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic12.png" alt="/">
									</a>
								</li>	
							</ul>
						</li>
					</ul>
					<ul class="list">
						<li>
							<a href="explore.html">
								<img src="images/post/pic6.png" alt="/">
							</a>
						</li>
						<li>
							<ul>
								<li>
									<a href="explore.html">
										<img src="images/post/pic7.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic8.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic9.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic10.png" alt="/">
									</a>
								</li>	
							</ul>
						</li>
					</ul>
					<ul class="list">
						<li>
							<a href="explore.html">
								<img src="images/post/pic11.png" alt="/">
							</a>
						</li>
						<li>
							<ul>
								<li>
									<a href="explore.html">
										<img src="images/post/pic2.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic5.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic3.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic12.png" alt="/">
									</a>
								</li>	
							</ul>
						</li>
					</ul>
					<ul class="list">
						<li>
							<a href="explore.html">
								<img src="images/post/pic6.png" alt="/">
							</a>
						</li>
						<li>
							<ul>
								<li>
									<a href="explore.html">
										<img src="images/post/pic7.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic8.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic9.png" alt="/">
									</a>
								</li>
								<li>
									<a href="explore.html">
										<img src="images/post/pic10.png" alt="/">
									</a>
								</li>	
							</ul>
						</li>
					</ul>
				</div>    
			</div>    
		</div>
    </div>    
    <!-- Page Content End-->
   
    <Footer />