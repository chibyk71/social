<script lang="ts">
	import { createEventDispatcher } from "svelte";


	import { PlusSolid, XmarkSolid, XmarksLinesSolid } from "svelte-awesome-icons";
    const dispatcher = createEventDispatcher()
    export let multiple = false;
    export let label = multiple
    export let accept = "image/*;video/*"
    let filesBind:FileList = ([] as unknown as FileList);
    $: filesToUpload = [...filesBind];
    
    $:{
        if (filesToUpload.length && filesBind.length>0) {
            dispatcher("change",{length:filesToUpload.length})
        } 
    }
</script>
<div class="flex items-end gap-2 justify-start flex-wrap">
    {#if filesToUpload.length > 0}
        <div class="container py-2">
            {#each filesToUpload as item}
                <div class="h-24 w-24 rounded relative">
                    <button type="button" class="close absolute -top-1 right-0"><XmarkSolid class="w-3 h-3" /></button>
                    <img src={URL.createObjectURL(item)} alt="imn" class="w-full h-full rounded">
                </div>
            {/each}
        </div>
    {/if}
    <label for="file" class="flex items-center justify-center flex-wrap content-center">
        {#if !multiple && (filesToUpload.length <= 0)}
            <slot name="label"></slot>
        {/if}
        {#if $$slots.label && multiple && (filesToUpload.length > 0)}    
            <div class="py-1.5 w-24 h-24 rounded border border-dashed bg-transparent backdrop-blur">
                <PlusSolid class="w-4 h-4" />
                <p class="w-full text-center mb-0">Add</p>
            </div>
        {/if}
    </label>
    <input type="file" name="" {multiple} on:input id="file" class="hidden" {accept} bind:files={filesBind}>
</div>