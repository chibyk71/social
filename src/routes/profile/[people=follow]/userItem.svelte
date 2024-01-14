<script lang="ts">
	import { handleFollow } from '$lib/util/followHandler';
    export let id:string;
    export let name:string;
    export let username:string;
    export let avatar:string|null;
    export let _count:{followers:number}|null = null;

    let isFollower = _count !== null?_count?.followers:0
    $: text = isFollower > 0 ? 'UNFOLLOW' : 'FOLLOW';
</script>

<div class="w-full">
	<div class="user-grid style-2">
		<a href="/profile/{id}" class="flex align-center">
			<div class="media status media-50">
				<img src="images/stories/small/{avatar}" alt="/" />
				<span class="font-normal text-sm/none">@{username}</span>
			</div>
			<span class="name">{name}</span>
		</a>
		<a href={void 0} on:click={()=>handleFollow(id,text.toLowerCase(),(res)=>{isFollower = Number(res)})} class="follow-btn" class:follow={!isFollower}>{text}</a>
	</div>
</div>
