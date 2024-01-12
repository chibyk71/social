<script lang="ts">
    import TopBar from '$lib/nav/topBar.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<TopBar title="edit profile">
    <svelte:fragment slot="right">
        <a href="{void(0)}" class="text-dark text-xl/none">						
            <i class="fa-solid fa-check"></i>
        </a>
    </svelte:fragment>
</TopBar>
<!-- Page Content -->
    <div class="page-content">
        <div class="container">
            <div class="edit-profile">
				<div class="profile-image">
					<div class="media media-100 rounded-circle">
						<img src="images/stories/pic3.png" alt="/">	
					</div>
					<a href="javascript:void(0);">Change profile photo</a>
				</div>
				<form>
					<div class="mb-3 input-group input-mini">
						<input type="text" class="form-control" placeholder="Name">
					</div>
					<div class="mb-3 input-group input-mini">
						<input type="text" class="form-control" placeholder="Username">
					</div>
					<div class="mb-3 input-group input-mini">
						<input type="url" class="form-control" placeholder="Website">
					</div>
					<div class="mb-3 input-group input-mini">
						<input type="text" class="form-control" placeholder="Bio">
					</div>
				</form>
            </div>
			<ul class="link-list">
				<li>
					<a href="javascript:void(0);">Add Link</a>
				</li>
				<li>
					<a href="javascript:void(0);">Switch to professional account</a>
				</li>
				<li>
					<a href="javascript:void(0);">Create avatar</a>
				</li>
				<li>
					<a href="javascript:void(0);">Personal information settings</a>
				</li>
			</ul>	
        </div>
    </div>
    <!-- Page Content End-->