<script lang="ts">
	import TopBar from '$lib/nav/topBar.svelte';
	import { CheckSolid, VideoSolid, XmarkSolid } from 'svelte-awesome-icons';
    import type { PageData } from './$types';
	import Modal from '$lib/modal.svelte';
	import { canvas } from '$lib/comp/canvasStore';
    
    export let data: PageData;
    let call = false;
    let chatMessageValue:string;
    // Chat Box ============
	const handleChatBox = function (e:Event){
        window.scrollTo(0, document.body.scrollHeight);
        (e.target as HTMLInputElement).value ='';    
    }
</script>
<TopBar>
    <svelte:fragment slot="center">
        <div class="media mr-3 media-35 rounded-circle">
            <img src="images/stories/small/pic1.jpg" alt="/">
        </div>
        <h5 class="my-0">Claudia Surr</h5>
    </svelte:fragment>
    <svelte:fragment slot="right">
        <div class="right-content">
            <a href={void(0)} class="text-dark text-xl/none" on:click={()=>canvas.open("video-call") }>
                <VideoSolid />
            </a>
        </div>
    </svelte:fragment>
</TopBar>
<!-- Page content  -->
<div class="page-content message-content">
    <div class="container chat-box-area bottom-content"> 
        <div class="chat-content">
            <div class="message-item">
                <div class="bubble">Do you have a time for interviews today?</div>    
                <div class="message-time">4.30 AM</div>    
            </div>
        </div>
        <div class="chat-content user">
            <div class="message-item">
                <div class="bubble">Yes, I have.</div>    
                <div class="message-time">9.30 AM</div>    
            </div>
        </div>
        <div class="chat-content">
            <div class="message-item">
                <div class="bubble">Okay, please meet me at Franklin Avenue at 5 pm</div>    
                <div class="message-time">9:44 AM</div>    
            </div>
        </div>
        <div class="chat-content user">
            <div class="message-item">
                <div class="bubble">Roger that sir, thankyou</div>    
                <div class="message-time">9.30 AM</div>    
            </div>
        </div>
        <div class="chat-content">
            <div class="message-item">
                <div class="bubble">Do you have a time</div>    
                <div class="message-time">10:44 AM</div>    
            </div>
        </div>
        <div class="chat-content user">
            <div class="message-item">
                <div class="bubble">Yes</div>    
                <div class="message-time">9.30 AM</div>    
            </div>
        </div>
        <div class="chat-content">
            <div class="message-item">
                <div class="bubble">Okay</div>    
                <div class="message-time">1:15 AM</div>    
            </div>
        </div>
        <div class="chat-content user">
            <div class="message-item">
                <div class="bubble">Yes</div>    
                <div class="message-time">9.30 AM</div>    
            </div>
        </div>
        <div class="chat-content user">
            <div class="message-item">
                <div class="bubble">Yes</div>    
                <div class="message-time">9.30 AM</div>    
            </div>
        </div>
    </div>  
</div>
<!-- Page content End -->

<!-- Footer -->
<footer class="footer border-0 fixed">
    <div class="container p-2">
        <div class="chat-footer">
            <form>
                <div class="form-group boxed">
                    <div class="input-wrapper message-area">
                        <div class="append-media"></div>
                        <input bind:value={chatMessageValue} type="text" class="form-control" placeholder="Type message...">
                        <button on:click={handleChatBox} class="btn btn-chat btn-icon btn-primary p-0 btn-rounded">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.4499 11.11L3.44989 2.11C3.27295 2.0187 3.07279 1.9823 2.87503 2.00546C2.67728 2.02862 2.49094 2.11029 2.33989 2.24C2.18946 2.37064 2.08149 2.54325 2.02982 2.73567C1.97815 2.9281 1.98514 3.13157 2.04989 3.32L4.99989 12L2.09989 20.68C2.05015 20.8267 2.03517 20.983 2.05613 21.1364C2.0771 21.2899 2.13344 21.4364 2.2207 21.5644C2.30797 21.6924 2.42378 21.7984 2.559 21.874C2.69422 21.9496 2.84515 21.9927 2.99989 22C3.15643 21.9991 3.31057 21.9614 3.44989 21.89L21.4499 12.89C21.6137 12.8061 21.7512 12.6786 21.8471 12.5216C21.9431 12.3645 21.9939 12.184 21.9939 12C21.9939 11.8159 21.9431 11.6355 21.8471 11.4784C21.7512 11.3214 21.6137 11.1939 21.4499 11.11ZM4.70989 19L6.70989 13H16.7099L4.70989 19ZM6.70989 11L4.70989 5L16.7599 11H6.70989Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>    
    </div>
</footer>
<!-- Footer End -->

<Modal fullscreen={false} center={true} id="video-call">
    <svelte:fragment slot="body">
        <div class="video-calling-popup" style="background-image: url(images/stories/pic2.png);">
            <div class="main-box">
                <div class="media mb-4 mx-auto media-60 rounded-circle">
                    <img src="images/stories/pic2.png">
                </div>
                <div class="video-content">
                    <VideoSolid class="mb-2 fill-white" />
                    <h6 class="text-white">Emilia is video calling...</h6>
                </div>
                <div class="button-group">
                    <a class="btn btn-danger mr-3 px-4" href={void(0)}>
                        <XmarkSolid class="w-4 h-4" />
                    </a>
                    <a class="btn btn-success bg-green-500 ml-3 px-4" href="/videocall">
                        <CheckSolid class="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    </svelte:fragment>
</Modal>