<script>
    import "../../app.css"

    function goLoginPage() {
        window.location.href = '/login';
    }

    function goGuestPage() {
        window.location.href = '/dashboard';
    }
</script>

<div class="min-h-screen flex flex-col">
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

<main class="overflow-hidden bg-primary-dark flex-1">
        <div class="text-center py-8">
            <h1 class="text-[6rem] text-primary-bright"><b>Dietary Info</b></h1>
        </div>
        <div class="text-center">
            <p class="text-xl text-primary-light"><b>Track your allergies and dietary restrictions</b></p>
        </div>

        <div class="pt-10">
            <div class="flex items-center justify-center gap-10 mt-10">
                <div>
                    <button class="rounded-2xl gimages w-[10rem] h-[10rem] bg-cover" on:click={goGuestPage}></button>
                </div>
                <div>
                    <button class="rounded-2xl w-[10rem] h-[10rem] loginB bg-cover" on:click={goLoginPage}></button>
                </div>
            </div>
        </div>
</main>

</div>

<style>
    .gimages {
        background-image: url("/images/guest.jpg");
    }

    .gimages:hover {
        background-image: url("/images/guest2.jpg");
    }

    .loginB {
        background-image: url("/images/login.jpg");
    }

    .loginB:hover {
        background-image: url("/images/login2.jpg");
    }
</style>