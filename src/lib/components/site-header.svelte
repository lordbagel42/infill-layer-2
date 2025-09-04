<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { Button } from '$lib/components/ui/button';
	import MainNav from './main-nav.svelte';
	import { mainNavItems } from '$lib/navigation';
</script>

<header class="sticky top-0 z-50 w-full bg-background">
	<div class="container-wrapper 3xl:fixed:px-0 px-6">
		<div
			class="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4"
		>
			<Button href="/" variant="ghost" size="icon" class="p-0">
				<img
					src="https://assets.hackclub.com/icon-rounded.svg"
					alt="Hack Club Logo"
					class="h-8 w-8"
				/>
				<span class="sr-only">Hack Club Logo</span>
			</Button>
			<MainNav items={mainNavItems} class="hidden lg:flex" />

			<div class="flex flex-1 items-center justify-center">Infill: Layer 2</div>

			<div class="flex items-center gap-2">
				<Button onclick={toggleMode} variant="outline" size="icon">
					<SunIcon
						class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
					/>
					<MoonIcon
						class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		</div>
	</div>
</header>
