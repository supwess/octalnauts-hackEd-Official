<script>
    import "../../app.css"
</script>

<title>Log In</title>

<body class="bg-primary-dark">
    <div class="flex justify-center items-center h-screen">
        <form class="w-1/3 text-primary-bright">
            <div>
                <h1 class="text-center text-4xl"><b>Log In</b></h1>
            </div>

            <br><br>

            <div>
                <label><b>Email</b></label><br>
                <input type="email" required placeholder="Enter Email"
                    class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2 invalid:text-pink-600 invalid:outline-pink-500">
            </div>

            <br>

            <div>
                <label><b>Password</b></label><br>
                <input type="password" required placeholder="Enter Password"
                    class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
            </div>

            <br>

            <div class="justify-end flex">
                <button class="w-2/5 text-primary-bright bg-secondary-dark rounded-xl p-2 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3" >
                    Login
                </button>
            </div>

            <br>

            <div>
                <p class="text-center">Don't have an account? <a href="../signup" class="text-blue-500 hover:text-blue-600 transition-all duration-150">Create an account</a></p>
            </div>
        </form>
    </div>
    
</body>

