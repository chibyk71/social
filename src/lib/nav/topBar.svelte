<script>
	import { ArrowLeftSolid } from 'svelte-awesome-icons';
    export let title = "";
	let classname = ""

	export {classname as class}
</script>

<!-- Header -->
	<header class="header {classname}">
		<div class="container">
			<div class="main-bar">
				<div class="left-content">
					<a href={void(0)} class="back-btn">
						<slot name="left"><ArrowLeftSolid /></slot>
					</a>
				</div>
				<div class="mid-content flex items-center">
					<slot name="center"><h4 class="title mb-0 capitalize">{title}</h4></slot>
				</div>
				<div class="right-content">
					<slot name="right"></slot>
				</div>
			</div>
		</div>
	</header>
    <!-- Header End -->