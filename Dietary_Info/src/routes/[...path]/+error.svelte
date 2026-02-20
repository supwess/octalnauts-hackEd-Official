<!--
Source - https://stackoverflow.com/a/74843614
Posted by biscarrosse
Retrieved 2026-02-20, License - CC BY-SA 4.0
-->

<script>
    import "../../app.css"
    import { page } from '$app/stores';
</script>

<div>
    <h1>It seems there has been an error, sorry about that.</h1>
    {#if $page?.error}
        <div class="mt-4 p-4 border-y-2">
            {#if $page?.status}
                <p>Page status: {$page?.status}</p>
            {/if}
            {#if $page?.error?.message}
                <p>Error message: {$page?.error?.message}</p>
            {/if}
        </div>
    {/if}
</div>
