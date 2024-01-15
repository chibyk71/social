<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
    import "./btn.postcss"

	type Variant = 'primary' | 'secondary' | 'danger'|"dark"|"info"|"success";
	type Size = 'sm' | 'lg' | 'md';
	type Kind = 'outline' | 'transparent' | 'solid'|"";
    let className = "";
    export {className as class}
	export let type: HTMLButtonAttributes['type'] = 'button';
	export let disabled = false;
	export let variant: Variant = 'primary';
	export let size: Size = 'md';
	export let kind: Kind = '';
	export let href: string | undefined = undefined;
	export let fullWidth: boolean = false;
	export let formAction: string | undefined = undefined;
</script>

{#if href}
	<a {href} class="btn {className} btn-{variant} btn-{size} btn-{kind}" class:btn-block={fullWidth}><slot /></a>
{:else}
	<button
		on:click
		class="btn {className} btn-{variant} btn-{size} btn-{kind}"
		class:btn-block={fullWidth}
		{type}
		{disabled}
		formaction={formAction}
	>
		<slot />
	</button>
{/if}
