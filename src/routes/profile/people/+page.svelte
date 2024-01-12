<script lang="ts">
	import TopBar from '$lib/nav/topBar.svelte';
	import { slideRight } from '$lib/util/transiions/slideRight';
    import type { PageData } from './$types';
    export let data: PageData;

    let followers = true;
</script>

<TopBar title="User name bvj" />
<!-- Page Content -->
    <div class="page-content">
		<nav id="main-navigation">
			<ul class="links-container">
				<li class="nav-link relative" class:active={followers} on:click={()=>{followers=!0}}>245 Followers</li>
				<li class="nav-link relative" class:active={!followers} on:click={()=>{followers=!1}}>85 Following</li>
			</ul>
		</nav>
		<div class="swiper-scrollbar"></div>
        <div class="container profile-area pt-0">	
			<article id="pages-container">
                {#if followers}
                    <div class="contant-section style-2" in:slideRight={{delay:400}} out:slideRight={{}}>
                        <div class="title-bar m-0 py-4">
                            <h6 class="mb-0">Followers</h6>
                        </div>
                        <div class="tab-pane fade show active" id="list" role="tabpanel" aria-labelledby="list-tab">
                            <div class="dz-user-list !px-1 flex flex-wrap gap-y-3">
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic1.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Andy Lee</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic2.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Brian Harahap</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic3.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Christian Hang</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic4.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Chloe Mc.Jenskin</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic6.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">David Bekam</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic5.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Dons John</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic6.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Eric Leew</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic7.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Richard Sigh</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic8.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Andy Lee</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic5.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Brian Harahapc</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic4.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">David Bekam</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic3.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Jackson</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic2.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Olivis kmoris</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {:else}
                    <div class="contant-section style-2" in:slideRight={{delay:400}} out:slideRight={{}}>
                        <div class="title-bar m-0 py-4">
                            <h6 class="mb-0">Friends</h6>
                        </div>
                        <div class="active">
                            <div class="dz-user-list !px-1 flex-wrap flex gap-y-3">
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic1.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Andy Lee</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic2.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Brian Harahap</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic3.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Christian Hang</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic4.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Chloe Mc.Jenskin</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic6.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">David Bekam</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic5.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Dons John</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic6.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Eric Leew</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic7.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Richard Sigh</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic8.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Andy Lee</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic5.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Brian Harahapc</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic4.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">David Bekam</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic3.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Jackson</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class="user-grid style-2">
                                        <a href="user-profile.html" class="flex align-center">
                                            <div class="media status media-50">
                                                <img src="images/stories/small/pic2.jpg" alt="/">
                                                <div class="active-point"></div>
                                            </div>
                                            <span class="name">Olivis kmoris</span>
                                        </a>
                                        <a href="javascript:void(0);" class="follow-btn">UNFOLLOW</a>
                                    </div>
                                </div>
                            </div>
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
        }
    </style>