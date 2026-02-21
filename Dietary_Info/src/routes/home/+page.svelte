<script>
    import "../../app.css"

    function goLoginPage() {
        window.location.href = '/login';
    }

    function goGuestPage() {
        window.location.href = '/dashboard';
    }
</script>

<title>
    Home
</title>

<div class="h-full flex flex-col">
    <main class="overflow-hidden bg-primary-dark flex-1 h-14/15">
        <div class="text-center py-8">
            <h1 class="text-[6rem] text-primary-bright"><b>Dietary Info</b></h1>
        </div>
        <div class="text-center">
            <p class="text-xl text-primary-light"><b>Track your allergies and dietary restrictions</b></p>
        </div>

        <div class="pt-10">
            <div class="flex items-center justify-center gap-10 mt-10">
                <div>
                    <button class="rounded-2xl w-40 h-40 loginB bg-cover" on:click={goLoginPage} aria-label="Login Page Button"></button>
                </div>
                <div>
                    <button class="rounded-2xl gimages w-40 h-40 bg-cover" on:click={goGuestPage} aria-label="Guest Page Button"></button>
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