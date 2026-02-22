<script>
	const menuItems = [
		{ name: 'Add Restrictions', href: '/add_restrictions' },
		{ name: 'Home', href: '/dashboard' },
		{ name: 'About', href: '/about' },
		{ name: 'Logout', href: '/home' },
	];

	let {children} = $props();

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

{@render children()}
