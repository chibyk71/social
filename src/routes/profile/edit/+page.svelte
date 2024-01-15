<script lang="ts">
	import { enhance } from '$app/forms';
	import { CheckSolid } from 'svelte-awesome-icons';
  	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import TopBar from '$lib/nav/topBar.svelte';

    
    export let data: PageData;

	const { form, errors, constraints } = superForm(data.form);
</script>

<TopBar title="edit profile">
    <svelte:fragment slot="right">
        <button type="submit" form="update" class="btn btn-sm bg-primary">						
            <CheckSolid class="w- h-4" />
        </button>
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
					<a href={void(0)}>Change profile photo</a>
				</div>
				<form use:enhance method="post" id="update">
					<div class="mb-3 input-group input-mini">
						<input type="text" name="name" aria-invalid={$errors.name ? 'true' : undefined} bind:value={$form.name} {...$constraints.name} class="form-control" placeholder="Name" >
					</div>
					<div class="mb-3 input-group input-mini">
						<input type="text" name="username" aria-invalid={$errors.username ? 'true' : undefined} bind:value={$form.username} {...$constraints.username} class="form-control" placeholder="Username">
					</div>
					<div class="mb-3 input-group input-mini">
						<input type="text" aria-invalid={$errors.bio ? 'true' : undefined} bind:value={$form.bio} {...$constraints.bio} name="bio" class="form-control" placeholder="Bio">
					</div>
				</form>
            </div>
			<ul class="link-list">
				<li>
					<a href={void(0)}>Add Link</a>
				</li>
				<li>
					<a href={void(0)}>Switch to professional account</a>
				</li>
				<li>
					<a href={void(0)}>Create avatar</a>
				</li>
				<li>
					<a href={void(0)}>Personal information settings</a>
				</li>
			</ul>	
        </div>
    </div>
    <!-- Page Content End-->