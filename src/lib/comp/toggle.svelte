<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();
    let id:string = crypto.randomUUID();;
    let classname = ""
    export {classname as class}
    export let checked = true
</script>

<div class="toggle-list {classname}">
    <div class="no-class">
        <input on:change class="form-check-input" bind:checked={checked} type="checkbox" id="{id}">
        <label class="form-check-label" for="{id}"></label>
    </div>
</div>