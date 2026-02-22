<script lang="ts">
    import { page } from '$app/state';

    let progress = 50;
    let label = "";
    let color = "#3b82f6";
    let size = 200;
    let thickness = 8;

    let shouldDisplay = false;

    const r = (size / 2) - thickness;
    const circumference = 2 * Math.PI * r;
    let offset = $derived(circumference - (progress / 100) * circumference);

    const data = page.data;

    const url = data?.url;
    const menuItems = data?.navSites ?? [];

    const activeIndex = menuItems.findIndex(item =>
        url.pathname === item.link ||
        url.pathname.startsWith(item.link + "/")
    );

    let hoveredIndex = null;

    function setHover(i) {
        hoveredIndex = i;
    }

    function clearHover() {
        hoveredIndex = null;
    }

    const pillIndex = hoveredIndex ?? activeIndex;
</script>

<title>
    Dashboard
</title>
<div class="flex flex-col bg-primary-dark min-h-screen">
    <div>
        <h1 class="font-roboto text-center text-6xl text-white">Welcome Back!</h1>
    </div>
    {#if shouldDisplay}
    <div class="flex flex-col items-left pl-50 pt-20 gap-2 bg-primary-dark">
        <h1 class="font-roboto text-align text-white">Caloric Goal</h1>
        <svg width={size} height={size} viewBox="0 0 {size} {size}">
            <circle
            cx={size/2} cy={size/2} r={r}
            fill="none" stroke="#333" stroke-width={thickness}
            />
            <circle
            cx={size/2} cy={size/2} r={r}
            fill="none"
            stroke={color}
            stroke-width={thickness}
            stroke-linecap="round"
            stroke-dasharray={circumference}
            stroke-dashoffset={offset}
            transform="rotate(-90 {size/2} {size/2})"
            style="transition: stroke-dashoffset 0.5s ease"
            />
            <text x={size/2} y={size/2 + 6} text-anchor="middle" fill="white" font-size={size * 0.18}>
            {progress}%
            </text>
        </svg>
        {#if label}
            <span class="text-white text-sm">{label}</span>
        {/if}
    </div>
    {/if}


    <!-- NAVBAR -->

    <div class="flex flex-col items-center justify-center text-primary-bright">
        <div
                class="fixed bottom-8 mx-auto w-[60%] h-[7%]
               bg-transparent-primary shadow-lg rounded-4xl border border-primary-light
               flex flex-row items-center justify-evenly
               overflow-hidden"
        >
            <div
                    class="absolute top-1/2 -translate-y-1/2 h-10 bg-white/20 rounded-2xl transition-all duration-300"
                    style="
                width: calc(100% / {menuItems.length});
                left: calc((100% / {menuItems.length}) * {pillIndex});
            "
            ></div>

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
</div>
