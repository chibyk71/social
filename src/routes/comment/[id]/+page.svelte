<script lang="ts">
	import { page } from '$app/stores';
	import TopBar from '$lib/nav/topBar.svelte';
	import { HeartRegular } from 'svelte-awesome-icons';
	import InfiniteLoading, { type InfiniteEvent } from 'svelte-infinite-loading';
	let offset = 1;

	let infiniteId = Symbol();

	function infiniteHandler({ detail: { loaded, complete } }:InfiniteEvent) {
		fetch('/api/comment/',{
			method: 'post',
			body: JSON.stringify({ id: $page.params.id, offset })
		})
		.then(response => response.json())
		.then(data => {
			if (data.length) {
				offset += 1;
				comments = [...comments, ...data];
				loaded();
			} else {
				complete();
			}
		});
	}


	let comments: {
		id: bigint;
		content: string;
		createdAt: Date;
		author: { id: string; avatar: string; name: string };
		replies: {
			content: string;
			createdAt: Date;
			author: { id: string; avatar: string; name: string };
		}[];
	}[];
</script>

<TopBar title="comment" />

<!-- Page Content -->
<div class="page-content">
	<div class="container profile-area bottom-content">
		<ul class="dz-comments-list">
			{#each comments as { id, author, replies, content }}
				<li class="flex-wrap">
					<div class="list-content">
						<img src={author.avatar} alt="/" />
						<div>
							<h6 class="text-sm/none mb-1">{author.name}</h6>
							<p class="!mb-2">{content}</p>
							<ul class="bottom-item">
								<li class="text-light">3 Like</li>
								<li class="text-light">Reply</li>
							</ul>
						</div>
					</div>
					<div class="ml-auto">
						<div class="like-button"><HeartRegular class="ml-auto w-4 h-4" /></div>
					</div>
					{#if replies.length}
						<ul class="w-full mt-4">
							{#each replies as { author, content }}
								<li class="parent-list">
									<div class="list-content">
										<img src={author.avatar} alt="/" />
										<div>
											<h6 class="text-sm/none mb-1">{author.name}</h6>
											<p class="mb-2">{content}</p>
											<ul class="bottom-item">
												<li class="text-light">4 like</li>
											</ul>
										</div>
									</div>
									<div class="ml-auto">
										<div class="like-button"><HeartRegular class="ml-auto w-4 h-4" /></div>
									</div>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
			<InfiniteLoading on:infinite={infiniteHandler} identifier={infiniteId} />
		</ul>
	</div>
	<footer class="footer fixed border-top">
		<div class="container py-2">
			<div class="commnet-footer">
				<div class="flex items-center flex-1">
					<div class="media media-40 rounded-circle">
						<img src="images/stories/small/pic1.jpg" alt="/" />
					</div>
					<form class="flex-1" id="form">
						<input type="text" class="form-control" placeholder="Add a Comments..." />
					</form>
				</div>
				<button class="send-btn" form="form">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M21.4499 11.11L3.44989 2.11C3.27295 2.0187 3.07279 1.9823 2.87503 2.00546C2.67728 2.02862 2.49094 2.11029 2.33989 2.24C2.18946 2.37064 2.08149 2.54325 2.02982 2.73567C1.97815 2.9281 1.98514 3.13157 2.04989 3.32L4.99989 12L2.09989 20.68C2.05015 20.8267 2.03517 20.983 2.05613 21.1364C2.0771 21.2899 2.13344 21.4364 2.2207 21.5644C2.30797 21.6924 2.42378 21.7984 2.559 21.874C2.69422 21.9496 2.84515 21.9927 2.99989 22C3.15643 21.9991 3.31057 21.9614 3.44989 21.89L21.4499 12.89C21.6137 12.8061 21.7512 12.6786 21.8471 12.5216C21.9431 12.3645 21.9939 12.184 21.9939 12C21.9939 11.8159 21.9431 11.6355 21.8471 11.4784C21.7512 11.3214 21.6137 11.1939 21.4499 11.11ZM4.70989 19L6.70989 13H16.7099L4.70989 19ZM6.70989 11L4.70989 5L16.7599 11H6.70989Z"
							fill="#40189D"
						/>
					</svg>
				</button>
			</div>
		</div>
	</footer>
</div>
<!-- Page Content End-->
