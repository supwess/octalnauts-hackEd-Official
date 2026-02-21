<script>
    let { children } = $props();
</script>

<header>
    <a href="/home">
        <div class="ml-0 mt-0 w-full h-1/15 bg-secondary-dark">
            <div class="bg-secondary-dark w-1/4 pl-5 pt-3 pb-3">
                <h1 class="text-primary-bright text-3xl">
                    <b>PROJECT<br>OCTALNAUTS</b>
                </h1>
            </div>
        </div>
    </a>
</header>

{@render children()}