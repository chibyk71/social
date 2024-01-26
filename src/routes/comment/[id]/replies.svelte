<script lang="ts">
	import { HeartRegular } from "svelte-awesome-icons";
	import InfiniteLoading, { type InfiniteEvent } from "svelte-infinite-loading";

    export let replies: {
        id: number,
        content: string;
        createdAt: Date;
        author: {
            id: string;
            avatar: string;
            name: string;
        };
        likes: {
            id: string;
        }[];
        _count: {
            likes: number;
        };
    }[];  

    export let commentId:number
    let offset = 0

	function likeReplies(id: number) {
		throw new Error("Function not implemented.");
	}

    function fetchReplies({ detail: { loaded, complete } }: InfiniteEvent) {
		fetch('/api/replies/', {
			method: 'post',
			body: JSON.stringify({ id: commentId, offset })
		})
		.then((response) => response.json())
		.then((data) => {
			if (data.length) {
				offset += 1;
				replies = [...replies, ...data];
				loaded();
			} else {
				complete();
			}
		});
	}
</script>

<ul class="w-full mt-4 overflow-y-auto max-h-52">
	{#each replies as { id, author, content, _count, likes }}
		<li class="parent-list">
			<div class="list-content">
				<img src={author.avatar} alt="/" />
				<div>
					<h6 class="text-sm/none mb-1">{author.name}</h6>
					<p class="mb-2">{content}</p>
					<ul class="bottom-item">
						<li class="text-light">{_count.likes} like</li>
					</ul>
				</div>
			</div>
			<div class="ml-auto">
				<a
					href={void 0}
					on:click={() => {
						likeReplies(id);
					}}
					class="like-button"
					class:active={likes.length}><HeartRegular class="ml-auto w-4 h-4" /></a
				>
			</div>
		</li>
	{/each}
    <InfiniteLoading on:infinite={fetchReplies} />
</ul>
