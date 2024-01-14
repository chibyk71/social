<script lang="ts">
    import TopBar from '$lib/nav/topBar.svelte';
	import { GearSolid, PencilSolid } from 'svelte-awesome-icons';
	import type { PageData } from './$types';
	import Footer from '$lib/nav/footer.svelte';
    
    export let data:PageData

	const {posts,_count} = data
</script>

<TopBar title="Profile">
    <svelte:fragment slot="right">
        <a href="/setting"><GearSolid /></a>
    </svelte:fragment>
</TopBar>

<!-- Page Content -->
    <div class="page-content">
        <div class="container profile-area">
            <div class="profile">
                <div class="main-profile">
					<div class="left-content">
						<span>@{data.username}</span>
						<h5 class="mt-1 text-ellipsis line-clamp-1">{data.name}</h5>
						<h6 class="text-primary font-normal">Model</h6>
					</div>
					<div class="right-content">
						<div class="upload-box">
							<img src="images/stories/pic1.png" alt="/">
							<a href="/profile/edit" class="upload-btn"><PencilSolid class="w-4 h-4" /></a>
						</div>
					</div>
				</div>
				<div class="info">
					<h6>About me</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit ematons ectetur adipiscing elit, sed do sum sit emat.
					</p>
				</div>
            </div>			
			<div class="contant-section">
				<div class="social-bar">
					<ul>
						<li class="active">
							<a href={void(0)}>
								<h4>{_count.posts}</h4>	
								<span>Post</span>
							</a>
						</li>
						<li>
							<a href="profile/following">
								<h4>{_count.following}</h4>	
								<span>Following</span>
							</a>
						</li>
						<li>
							<a href="/profile/followers">
								<h4>{_count.followers}</h4>	
								<span>Followers</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="title-bar my-2">
					<h6 class="mb-0">My Posts</h6>
				</div>
				<div class="dz-lightgallery" id="lightgallery-2">
					<a class="gallery-box" href="images/post/pic4.png">
						<img src="images/post/pic4.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic3.png">
						<img src="images/post/pic3.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic2.png">
						<img src="images/post/pic2.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic1.png">
						<img src="images/post/pic1.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic9.png">
						<img src="images/post/pic9.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic12.png">
						<img src="images/post/pic12.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic5.png">
						<img src="images/post/pic5.png" alt="image">
					</a>
					<a class="gallery-box" href="images/post/pic6.png">
						<img src="images/post/pic6.png" alt="image">
					</a>
				</div>
			</div>	
        </div>
    </div>
    <!-- Page Content End-->

    <Footer />