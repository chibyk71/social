<script lang="ts">
	import { isfixed } from '$lib/util/headerFixed';
	import { ArrowLeftSolid, VideoSolid } from 'svelte-awesome-icons';
    import type { PageData } from './$types';
	import { onMount } from 'svelte';
    
    export let data: PageData;

	let live = false;
	let video:HTMLVideoElement;
    $isfixed = false
	let stream:MediaStream;
    function stopWebcam() {
        stream.getVideoTracks()[0].stop()
		stream.getAudioTracks()[0].stop()
        live = false
    }

	const handleGoLive = async ()=>{
		await navigator.mediaDevices.getDisplayMedia({video:true,audio:true})
		.then((stream)=>{
			video.srcObject = stream
			stream = stream;
		})
        .catch((error) => {
            if (error.name === "OverconstrainedError") {
            // console.error(
            //     `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`
            // );
            } else if (error.name === "NotAllowedError") {
            console.error(
                "You need to grant this page permission to access your camera and microphone."
            );
            } else {
            console.error(`getUserMedia error: ${error.name}`, error);
            }
        });
	}

	onMount(()=>{
		handleGoLive();
	})
</script>

<!-- Page Content -->
    <div class="page-content">
		<div class="story-box">
			<div class="container">
				<div class="user-profile justify-start">
					<a href={void(0)} class="back-btn">
						<ArrowLeftSolid class="fill-white" />
					</a>	
					<div class="flex items-center ml-4">
						<div class="media media-45">
							<img class="rounded" src="images/stories/small/pic1.jpg" alt="/">
						</div>
						<div class="user-info">
							<h6>Richard Sigh</h6>
							<small>4m ago</small>
						</div>
					</div>
					<a href={void(0)} on:click={stopWebcam} class="bg-red-500 btn btn-sm ml-auto" class:hidden={!live}>
						<VideoSolid class="fill-slate-200 w-4 h-4" />
					</a>
				</div>
				<!-- svelte-ignore a11y-media-has-caption -->
				<video autoplay bind:this={video}>
					<source src="images/reels/video5.mp4" type="video/mp4"> 
				</video>
			</div>
        </div>
    </div>
    <!-- Page Content End-->
	<div class="footer border-0 bg-black-gradient fixed">
        <div class="container">
			{#if live}
				<ul class="comment-list">
					<li>
						<div class="media media-45 rounded-circle">
							<img src="images/stories/pic1.png" alt="/">
						</div>
						<div class="ml-3">
							<h6 class="text mb-1">Emilia</h6>
							<small class="text">Loren Ipsum Dolor Sit Amet...</small>
						</div>
					</li>
					<li>
						<div class="media media-45 rounded-circle">
							<img src="images/stories/pic2.png" alt="/">
						</div>
						<div class="ml-3">
							<h6 class="text mb-1">Richard</h6>
							<small class="text">Consectelur Adipiscing Elit...</small>
						</div>
					</li>
					<li>
						<div class="media media-45 rounded-circle">
							<img src="images/stories/pic3.png" alt="/">
						</div>
						<div class="ml-3">
							<h6 class="text mb-1">Jasmine</h6>
							<small class="text">A wonderful serenity has taken...</small>
						</div>
					</li>
				</ul>
	            <div class="chat-footer style-1">
	                <form>
	                    <div class="form-group boxed">
	                        <div class="input-wrapper message-area">
								<div class="append-media"></div>
	                            <input type="text" class="form-control" placeholder="Type message...">
	                            <a href="javascript:void(0);" class="btn btn-chat bg-transparent btn-icon btn-primary p-0 btn-rounded">
	                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
	                                    <path d="M21.4499 11.11L3.44989 2.11C3.27295 2.0187 3.07279 1.9823 2.87503 2.00546C2.67728 2.02862 2.49094 2.11029 2.33989 2.24C2.18946 2.37064 2.08149 2.54325 2.02982 2.73567C1.97815 2.9281 1.98514 3.13157 2.04989 3.32L4.99989 12L2.09989 20.68C2.05015 20.8267 2.03517 20.983 2.05613 21.1364C2.0771 21.2899 2.13344 21.4364 2.2207 21.5644C2.30797 21.6924 2.42378 21.7984 2.559 21.874C2.69422 21.9496 2.84515 21.9927 2.99989 22C3.15643 21.9991 3.31057 21.9614 3.44989 21.89L21.4499 12.89C21.6137 12.8061 21.7512 12.6786 21.8471 12.5216C21.9431 12.3645 21.9939 12.184 21.9939 12C21.9939 11.8159 21.9431 11.6355 21.8471 11.4784C21.7512 11.3214 21.6137 11.1939 21.4499 11.11ZM4.70989 19L6.70989 13H16.7099L4.70989 19ZM6.70989 11L4.70989 5L16.7599 11H6.70989Z" fill="#fff"></path>
	                                </svg>
	                            </a>
	                        </div>
	                    </div>
	                </form>
	            </div>
			{:else}
				<div class="flex items-center justify-center">
					<button type="button" class="border-0 btn bg-primary p-4 capitalize small !rounded-full flex-col"><VideoSolid class="" /> go live</button>
				</div>
			{/if}    
        </div>
    </div>