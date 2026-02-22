<script>
	let { children, data } = $props();

	const url = $derived(data?.url);
	const menuItems = $derived(data?.navSites ?? []);

	// active index based on URL
	const activeIndex = $derived(
			menuItems.findIndex(item =>
					url.pathname === item.link ||
					url.pathname.startsWith(item.link + "/")
			)
	);

	// hovered index (must be let, not const)
	let hoveredIndex = $state(null);

	function setHover(i) {
		hoveredIndex = i;
	}

	function clearHover() {
		hoveredIndex = null;
	}

	// pill target
	const pillIndex = $derived(hoveredIndex ?? activeIndex);
</script>

{@render children()}

<!-- OUTER WRAPPER MUST BE RELATIVE -->
	<!-- NAVBAR MUST BE FIXED + RELATIVE -->
<div class="flex flex-col items-center justify-center text-primary-bright">
	<div class="fixed bottom-8 mx-auto w-[60%] h-[7%]
               bg-transparent-primary shadow-lg rounded-4xl border border-primary-light
               flex flex-row items-center justify-evenly
               overflow-hidden"
	>

		<!-- FLOATING PILL MUST BE ABSOLUTE INSIDE RELATIVE PARENT -->
		<div
				class="absolute top-1/2 -translate-y-1/2 h-10 bg-white/20 rounded-2xl transition-all duration-300"
				style="
                width: calc(100% / {menuItems.length});
                left: calc((100% / {menuItems.length}) * {pillIndex});
            "
		></div>

		<!-- NAV ITEMS -->
		{#each menuItems as menuItem, i}
			<a
					href={menuItem.link}
					data-sveltekit-preload-data
					class="flex-1 text-center relative z-10 py-2"
					onmouseenter={() => setHover(i)}
					onmouseleave={clearHover}
			>
				{menuItem.name}
			</a>
		{/each}
	</div>
</div>