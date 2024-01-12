<script lang="ts">
	import { slideVertical } from "./util/transiions/slideVertical";
	import { canvas } from "./comp/canvasStore";
    export let id = "";
    export let title:string = "";
	export let center = false;
    let className = "";
    export {className as class};
	export let fullscreen = true;
	export let background =  "bg-[rgb(var(--white))]";
</script>

{#if $canvas.length && $canvas[0] == id}
	<div transition:slideVertical={{ dir: 'up' }} class="bg-[#000] bg-opacity-50 h-full fixed top-0 left-0 z-50 w-full overflow-x-hidden overflow-y-auto outline-0 {className}" on:click={()=>{canvas.close();console.log("cli");}}>
		<div class="modal-dialog {center? "flex items-center":""} relative w-auto pointer-events-none h-full">
			<div class="modal-content max-h-full overflow-hidden relative flex flex-col w-full pointer-events-auto {background} bg-clip-padding border-black border-opacity-20 rounded-md outline-0 text-[rgb(var(--black))] ">
				{#if $$slots.title || title}
					<div class="modal-header flex shrink-0 items-center justify-between p-4 border-b border-b-[#dee2e6] rounded-t-[calc(0.3rem-1px)]">
	                    <slot name="title" {close}><h1 class="modal-title text-lg/none">{title}</h1></slot>
						<button type="button" class="btn-close" on:click={() =>canvas.close()} />
					</div>
				{/if}
				<div class="modal-body overflow-y-auto relative flex-auto pt-0 px-4 pb-4">
                    <slot name="body" />
				</div>
				{#if $$slots.footer}
					<div class="footer-modal flex gap-3 flex-nowrap shrink-0 items-center justify-center p-3 border-t rounded-b-[calc(0.3rem-1px)];">
						<slot name="footer"></slot>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	
</style>