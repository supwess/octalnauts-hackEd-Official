<script lang="ts">
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '$lib/components/ui/NavbarMenu';
	let active: string | null = null;
	function godashboard() {
        window.location.href = '/dashboard';
    }

    function gologoutPage() {
        window.location.href = '/login';
    }
</script>

<main class="min-h-screen flex flex-col">
    <slot />
</main>

<div>
	<div class={'fixed inset-x-0 bottom-8 z-50 mx-auto max-w-2xl'}>
		<NavbarMenu>
			<a href='/dashboard'><MenuItem {active} item="Dashboard">
			</MenuItem></a>
			<a href='/add_restrictions'><MenuItem {active} item="Goals">
			</MenuItem></a>
			<a href='/login'><MenuItem {active} item="Account">
			</MenuItem></a>
		</NavbarMenu>
	</div>
</div>