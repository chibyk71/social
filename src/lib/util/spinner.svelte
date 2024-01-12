<script>
    export let before = ""
    export let loading = false
</script>
{#if loading}
     <span class="spinner-border"></span>
{:else}
     {before}
{/if}