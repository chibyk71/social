<script lang="ts">
	import UserItem from './userItem.svelte';
	import { page } from '$app/stores';
	import TopBar from '$lib/nav/topBar.svelte';
	import { slideRight } from '$lib/util/transiions/slideRight';
	import type { PageData } from './$types';
    export let data: PageData;
    
    const {followers,following, _count,user} = data;
    
    let activeNav = (!!$page.params.people && ($page.params.people === "follower"));
</script>

<TopBar title={user.name} />
<!-- Page Content -->
    <div class="page-content">
		<nav id="main-navigation">
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<ul class="links-container">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="nav-link relative" class:active={activeNav} on:click={()=>{activeNav=!0}}>{_count?.followers} Followers</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="nav-link relative" class:active={!activeNav} on:click={()=>{activeNav=!1}}>{_count?.following}  Following</li>
			</ul>
		</nav>
		<div class="swiper-scrollbar"></div>
        <div class="container profile-area pt-0">	
			<article id="pages-container" class="bg-transparent">
                {#if activeNav}
                    <div class="contant-section style-2 bg-transparent" in:slideRight={{delay:400}} out:slideRight={{}}>
                        <div class="title-bar m-0 py-4">
                            <h6 class="mb-0">Followers</h6>
                        </div>
                        <div class="dz-user-list !px-1 flex flex-wrap gap-y-3">
                            {#if followers}
                                {#each followers as {from}}
                                    <UserItem {...from} />
                                {/each}
                            {:else}
                                <p class="">You have no follower invite friends or post content to gain followers</p>
                            {/if}
                        </div>
                    </div>
                {:else}
                    <div class="contant-section style-2 bg-transparent" in:slideRight={{delay:400}} out:slideRight={{}}>
                        <div class="title-bar m-0 py-4">
                            <h6 class="mb-0">Friends</h6>
                        </div>
                        <div class="dz-user-list !px-1 flex-wrap flex gap-y-3">
                            {#if following}
                                {#each following as {to}}
                                    <UserItem {...to} />
                                {/each}
                            {/if}
                        </div>	
                    </div>
                {/if}
			</article>		
        </div>
    </div>
    <!-- Page Content End-->

    <style>
        .nav-link.active::after{
            position: absolute;
            display: block;
            content: "";
            width: 100%;
            height: 4px;
            background-color: var(--primary);
            transition: all .3s linear;
            bottom: 0;
            left:0;
            right: 0;
        }
    </style>