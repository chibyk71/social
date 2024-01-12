<script>

	import { CommentSolid, HeartRegular, HeartSolid, ShareSolid } from "svelte-awesome-icons";
	import { canvas } from "./canvasStore";

</script>
<div class="post-card">
	<div class="top-meta">
		<div class="flex justify-between items-start">
			<a href="user-profile.html" class="media media-40">
				<img class="rounded" src="images/stories/small/pic6.jpg" alt="/" />
			</a>
			<div class="meta-content ms-3">
				<h6 class="title mb-0"><a href="user-profile.html">Hendri Lee</a></h6>
				<ul class="meta-list">
					<li>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.25 5.83331C12.25 9.91665 7 13.4166 7 13.4166C7 13.4166 1.75 9.91665 1.75 5.83331C1.75 4.44093 2.30312 3.10557 3.28769 2.121C4.27226 1.13644 5.60761 0.583313 7 0.583313C8.39239 0.583313 9.72774 1.13644 10.7123 2.121C11.6969 3.10557 12.25 4.44093 12.25 5.83331Z"
								stroke="black"
								stroke-opacity="0.6"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M7 7.58331C7.9665 7.58331 8.75 6.79981 8.75 5.83331C8.75 4.86681 7.9665 4.08331 7 4.08331C6.0335 4.08331 5.25 4.86681 5.25 5.83331C5.25 6.79981 6.0335 7.58331 7 7.58331Z"
								stroke="black"
								stroke-opacity="0.6"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Shibuya, Japan
					</li>
					<li>2m ago</li>
				</ul>
			</div>
		</div>
		<a href={void(0)} class="item-content item-link" on:click={()=>{canvas.open("share-post")}}>
			<ShareSolid class="fill-primary h-4 w-4" />
		</a>
	</div>
	<p class="text-black pb-4">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit emat 😎😎
	</p>
	<div class="dz-media">
		<img src="images/post/pic2.png" alt="/" />
		<div class="post-meta-btn">
			<ul>
				<li>
					<a href="javascript:void(0);" class="action-btn bg-primary">
						<HeartRegular class="fill-icon h-4 w-4" />
						<!-- <HeartSolid class="fill-icon-2" /> -->
						<h6 class="text-sm/none mb-0 ml-2" id="value1">221</h6>
					</a>
				</li>
				<li>
					<a href="comment.html" class="action-btn bg-secondary">
						<CommentSolid class="fill-icon h-4 w-4" />
						<h6 class="text-sm/none mb-0 ml-2">150</h6>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
