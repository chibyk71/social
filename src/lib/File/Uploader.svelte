<script lang="ts">
	import { flip } from 'svelte/animate';
	import { createEventDispatcher } from "svelte";
	import { PlusSolid, XmarkSolid } from "svelte-awesome-icons";
	import type { HTMLInputAttributes } from "svelte/elements";
    const dispatcher = createEventDispatcher()
    export let multiple = false;
    export let label = multiple
    export let maxSize:number|string|undefined = undefined
    export let accept:HTMLInputAttributes["accept"] = "image/*,video/*"
    let filesToUpload:File[] = [];
    let inputDom:HTMLInputElement;
    export let maxFiles:number|undefined = undefined;
    export let name = "files";
    const currentUrl = window.location.href;
    export let form:HTMLFormElement|undefined = undefined;
    export let url = form && form.action?form.action: currentUrl 
    let error:string[] = []
    const units = ["B", "KB", "MB", "GB", "TB"];

    const handleSubmit = async (data: any) => {
        const response = await fetch(url, {
            method: "post",
            headers: {
            'Content-Type': 'multipart/form-data', // Set appropriate content type
            },
            body: data ? JSON.stringify(data) : null
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json(); // For JSON responses
        return responseData;
    };
    
    const handleAddFile = async (e:Event & { currentTarget: EventTarget & HTMLInputElement;}) => {
        let filesBind = e.currentTarget.files
        if (!filesBind || !filesBind.length) {
            return
        }
        error = []
        if (maxFiles && filesBind.length > maxFiles) {
            error.push(`number of selected files must not exceed ${maxFiles}`)
            return
        }

        for (let index = 0; index < filesBind.length; index++) {
            const element = filesBind[index];
            const typeRegex = new RegExp(accept!.replace(/\*/g,"./*").replace(/\,/g,"|"))

            if (!typeRegex.test(element.type)) {
                error.push(`file type of ${element.type.split("/")[1]} is not allowed in ${element.name}`)
                return
            }

            if (maxSize) {
        
                let maxSizeInByte = typeof maxSize ==="number"? maxSize: 0
                if (typeof maxSize === "string") {
                    maxSizeInByte = Number(maxSize.slice(0,-2))
                    const unit = maxSize.slice(-2)
                    const index_of_unit = units.indexOf(unit)
                    while (index_of_unit > 0) {
                        maxSizeInByte *= 1024
                    }
                }

                if (element.size > maxSizeInByte) {
                    error.push(`file size must be less than ${maxSizeInByte}bytes at ${element.name}`)
                    return
                }

            }
        }

        filesToUpload = [...filesBind]

        dispatcher("change",{length:filesToUpload.length,type:"add"})
        
        dispatcher("add",{length:filesToUpload.length})
    }

    const handleRemoveFile = async (id:number) => {
        if (filesToUpload.length < 1) {
            return
        }
        
        const removed = filesToUpload.splice(id,1)
        filesToUpload = filesToUpload
        
        dispatcher("change",{length:filesToUpload.length,type:"remove"})
        
        dispatcher("remove",{length:filesToUpload.length,index:id,file:removed[0]})
    }

    const clearFiles =async () => {
        inputDom.value = "";
    }

    if (form) {
        form.onsubmit = (e)=> {
            e.preventDefault();

            const formdata = new FormData(form)
            filesToUpload.forEach(rile => {
                formdata.append("file",rile)
            });

            handleSubmit(formdata)
        }
    }
</script>
<div class="flex items-center gap-2 justify-start overflow-x-auto no-scroll-bar">
    {#if filesToUpload.length > 0}
        <div class="py-2 px-0 flex items-center gap-x-2">
            {#each filesToUpload as item, index (index)}
                <div class="h-40 w-[140px] rounded relative" animate:flip>
                    <button type="button" class="btn-close absolute -top-1 -right-1 bg-white" on:click={()=>handleRemoveFile(index)}><XmarkSolid class="w-3 h-3" /></button>
                    <img src={URL.createObjectURL(item)} alt="imn" class="w-full h-full rounded object-cover">
                </div>
            {/each}
        </div>
    {/if} 
    <label for="file" class="" on:click={clearFiles}>
        {#if (filesToUpload.length <= 0)}
            <slot name="label"></slot>
        {/if}
        {#if ($$slots.label && (filesToUpload.length > 0))}    
            <div class="py-2 w-[140px] h-40 rounded border-2 gap-y-3 border-dashed bg-transparent flex items-center justify-center flex-col">
                <PlusSolid class="w-4 h-4" />
                <p class="w-full text-center mb-0 text-lg font-semibold font-mono capitalize">{multiple?"Add":"change"}</p>
            </div>
        {/if}
    </label>
    <input type="file" {name} {multiple} on:input={(e)=>handleAddFile(e)} id="file" bind:this={inputDom} class="hidden" {accept}>
</div>