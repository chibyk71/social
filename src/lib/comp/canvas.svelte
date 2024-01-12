<script lang="ts">
	import { slideVertical } from "$lib/util/transiions/slideVertical";
	import { canvas } from "./canvasStore";
	let classname = "";
	export {classname as class}
	export let small = false
	export let id = "";
	export let drag = true;
	export let position = "bottom"
	let dir:"up"|"down" = position == "bottom"? "up":"down"
</script>
{#if $canvas.length && $canvas[0] === id}
	<div transition:slideVertical={{dir}} class="offcanvas offcanvas-{position} {classname}" tabindex="-1" aria-modal="true" role="dialog">
		{#if drag}
			<button type="button" class="btn-close drage-close h-4 border-0 focus:bg-white" aria-label="Close"></button>
		{/if}
		{#if $$slots.head}
			<div class="offcanvas-header share-style m-0 !pb-0">
				<slot name="head"></slot>
			</div>
		{/if}
		<div class="offcanvas-body container pb-0" class:small={small}>
			<slot name="body"></slot>
		</div>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={()=>{canvas.close()}} class="offcanvas-backdrop pwa-backdrop show"></div>
{/if}

<style>
	
</style>