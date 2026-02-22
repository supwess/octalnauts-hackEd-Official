<script lang="ts">
    export let progress = 50;
    export let label = "";
    export let color = "#3b82f6";
    export let size = 200;
    export let thickness = 8;

    let shouldDisplay = false;

    const r = (size / 2) - thickness;
    const circumference = 2 * Math.PI * r;
    $: offset = circumference - (progress / 100) * circumference;
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
</div>
