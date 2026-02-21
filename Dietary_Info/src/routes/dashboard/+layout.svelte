<script lang="ts">
	import { NavbarMenu, MenuItem, ProductItem } from '$lib/components/ui/NavbarMenu';
	let active: string | null = null;
</script>

<main class="min-h-screen bg-primary-dark pb-24">
  <slot />
</main>

<div class="relative flex w-full items-center justify-center">
	<div class={'fixed inset-x-0 bottom-8 z-50 mx-auto max-w-2xl'}>
		<NavbarMenu>
			<MenuItem {active} item="Account"></MenuItem>
			<MenuItem {active} item="Home"></MenuItem>
			<MenuItem {active} item="Goals"></MenuItem>
		</NavbarMenu>
	</div>
</div>
