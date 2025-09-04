<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import SiteHeader from '$lib/components/site-header.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="relative z-10 flex min-h-svh flex-col bg-background">
	<SiteHeader />
	<main class="flex flex-1 flex-col">
		{@render children()}
	</main>
	<SiteFooter />
</div>
