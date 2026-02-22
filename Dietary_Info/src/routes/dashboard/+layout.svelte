<script lang="ts">
	import { NavbarMenu, MenuItem, ProductItem } from '$lib/components/ui/NavbarMenu';
	let active: string | null = null;

	let { children } = $props();

	const menuItems: MenuItem[] = [
		{ name: 'Account', href: '/account' },
		{ name: 'Home', href: '/home' },
		{ name: 'Goals', href: '/add_restrictions' },
		{ name: 'About', href: '/about' }
	];
	import "../../app.css"
</script>

<section class="relative flex w-full justify-evenly">
	<div class='fixed inset-x-0 bottom-8 w-[50%] bg-transparent-primary shadow-lg rounded-4xl border border-primary-light text-primary-bright overflow-hidden h-[7%] m-auto flex flex-row items-center justify-evenly'>
		{#each menuItems as menuItem}
			<a href={menuItem.href}>
				<div class="flex-1 text-center">
					{menuItem.name}
				</div>
			</a>
		{/each}
	</div>
</section>

<slot />
