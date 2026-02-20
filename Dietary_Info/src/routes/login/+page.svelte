<script>
    import "../../app.css"
</script>

<body class="bg-primary-dark">
    <div class="flex justify-center items-center h-screen">
        <form class="w-1/3 text-primary-bright">
            <div>
                <label>Email:</label><br>
                <input type="email" required 
                    class="w-full bg-secondary-dark rounded-lg outline outline-3 outline-secondary-light p-3 mt-3">
            </div>

            <br>

            <div>
                <label>Password:</label><br>
                <input type="password" required 
                    class="w-full bg-secondary-dark rounded-lg outline outline-3 outline-secondary-light p-3 mt-3">
            </div>

            <br>

            <div class="justify-end flex">
                <button class="w-1/3 text-primary-bright bg-secondary-dark rounded-xl p-2">
                    Login
                </button>
            </div>
        </form>
    </div>
    
</body>

