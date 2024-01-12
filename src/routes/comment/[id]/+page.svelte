<script lang="ts">
    import TopBar from '$lib/nav/topBar.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<TopBar title="comment" />

<!-- Page Content -->
<div class="page-content">
    <div class="container profile-area bottom-content">	
        <ul class="dz-comments-list">
            <li class="flex-wrap">
                <div class="list-content">
                    <img src="images/stories/small/pic1.jpg" alt="/">	
                    <div>
                        <h6 class="text-sm/none mb-1">Lucas Mokmana</h6>
                        <p class="mb-2">Awesome app i ever used. great structure, and customizable for multipurpose. 😀😀</p>
                        <ul class="bottom-item">
                            <li class="text-light">3 Like</li>
                            <li class="text-light">Reply</li>
                            <li class="text-light">Send</li>
                        </ul>
                    </div>
                </div>
                <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>
                <ul class="w-full mt-4">
                    <li class="parent-list">
                        <div class="list-content">
                            <img src="images/stories/small/pic2.jpg" alt="/">	
                            <div>
                                <h6 class="text-sm/none mb-1">Lucas</h6>
                                <p class="mb-2">Yes I am also use this.🙂</p>
                                <ul class="bottom-item">
                                    <li class="text-light">Reply</li>
                                    <li class="text-light">Send</li>
                                </ul>
                            </div>
                        </div>
                        <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>				
                    </li>
                    <li class="parent-list">
                        <div class="list-content">
                            <img src="images/stories/small/pic2.jpg" alt="/">	
                            <div>
                                <h6 class="text-sm/none mb-1">John Doe</h6>
                                <p class="mb-2">Really Nice.👍</p>
                                <ul class="bottom-item">
                                    <li class="text-light">Reply</li>
                                    <li class="text-light">Send</li>
                                </ul>
                            </div>
                        </div>
                        <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>					
                    </li>
                </ul> 
            </li>
            <li>
                <div class="list-content">
                    <img src="images/stories/small/pic3.jpg" alt="/">	
                    <div>
                        <h6 class="text-sm/none mb-1">Hendri Lee</h6>
                        <p class="mb-2">Nice work...</p>
                        <ul class="bottom-item">
                            <li class="text-light">2 Like</li>
                            <li class="text-light">Reply</li>
                            <li class="text-light">Send</li>
                        </ul>
                    </div>
                </div>
                <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>
            </li>
            <li>
                <div class="list-content">
                    <img src="images/stories/small/pic4.jpg" alt="/">	
                    <div>
                        <h6 class="text-sm/none mb-1">Brian Harahap</h6>
                        <p class="mb-2">We will always be friends until we are so old and senile.</p>
                        <ul class="bottom-item">
                            <li class="text-light">7 Like</li>
                            <li class="text-light">Reply</li>
                            <li class="text-light">Send</li>
                        </ul>
                    </div>
                </div>
                <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>
            </li>
            <li>
                <div class="list-content">
                    <img src="images/stories/small/pic5.jpg" alt="/">	
                    <div>
                        <h6 class="text-sm/none mb-1">Dons John</h6>
                        <p class="mb-2">Wow, you are flawless, intelligent, and bright.🤗🤗</p>
                        <ul class="bottom-item">
                            <li class="text-light">2 Like</li>
                            <li class="text-light">Reply</li>
                            <li class="text-light">Send</li>
                        </ul>
                    </div>
                </div>
                <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>
            </li>
            <li>
                <div class="list-content">
                    <img src="images/stories/small/pic6.jpg" alt="/">	
                    <div>
                        <h6 class="text-sm/none mb-1">Eric Leew</h6>
                        <p class="mb-2">Finding a loving, cute, generous, caring, and intelligent pal is so hard. So, my advice to you all in the picture, never lose me.</p>
                        <ul class="bottom-item">
                            <li class="text-light">2 Like</li>
                            <li class="text-light">Reply</li>
                            <li class="text-light">Send</li>
                        </ul>
                    </div>
                </div>
                <div class="ml-auto"><div class="like-button"><i class="fa-regular fa-heart ml-auto"></i></div></div>
            </li>
        </ul>
    </div>
    <footer class="footer fixed border-top">
        <div class="container py-2">
            <div class="commnet-footer">
                <div class="d-flex align-items-center flex-1">
                    <div class="media media-40 rounded-circle">
                        <img src="images/stories/small/pic1.jpg" alt="/">
                    </div>
                    <form class="flex-1">
                        <input type="text" class="form-control" placeholder="Add a Comments..."/>
                    </form>
                </div>
                <a href="javascript:void(0);" class="send-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.4499 11.11L3.44989 2.11C3.27295 2.0187 3.07279 1.9823 2.87503 2.00546C2.67728 2.02862 2.49094 2.11029 2.33989 2.24C2.18946 2.37064 2.08149 2.54325 2.02982 2.73567C1.97815 2.9281 1.98514 3.13157 2.04989 3.32L4.99989 12L2.09989 20.68C2.05015 20.8267 2.03517 20.983 2.05613 21.1364C2.0771 21.2899 2.13344 21.4364 2.2207 21.5644C2.30797 21.6924 2.42378 21.7984 2.559 21.874C2.69422 21.9496 2.84515 21.9927 2.99989 22C3.15643 21.9991 3.31057 21.9614 3.44989 21.89L21.4499 12.89C21.6137 12.8061 21.7512 12.6786 21.8471 12.5216C21.9431 12.3645 21.9939 12.184 21.9939 12C21.9939 11.8159 21.9431 11.6355 21.8471 11.4784C21.7512 11.3214 21.6137 11.1939 21.4499 11.11ZM4.70989 19L6.70989 13H16.7099L4.70989 19ZM6.70989 11L4.70989 5L16.7599 11H6.70989Z" fill="#40189D"></path>
                    </svg>
                </a>
            </div>    
        </div>
    </footer>
</div>
<!-- Page Content End-->