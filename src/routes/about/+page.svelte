<script lang="ts">
    import TopBar from '$lib/nav/topBar.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<TopBar title="about" />

<div class="page-content">
        <div class="container">
			<h6 class="title">About us</h6>
			<ul class="list-style-1">
				<li>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</li>
			</ul>
        </div>   
    </div> 