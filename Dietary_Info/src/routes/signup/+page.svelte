<script>
	import { form } from "$app/server";

    import "../../app.css"


</script>

<title>Sign Up</title>

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

<body class="bg-primary-dark h-fit overflow-hidden">
    <div class="flex justify-center items-center h-svh">
        <form method="POST" class="w-2/3 text-primary-bright">
            <div>
                <h1 class="text-center text-4xl"><b>Sign Up</b></h1>
            </div>

            <br><br>

            <div>
                <label><b>Username</b></label><br>
                <input type="text" required placeholder="Enter Username" name="username"
                    class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
            </div>

            <br>

            <div>
                <label><b>Email</b></label><br>
                <input type="email" required placeholder="Enter Email" name="email"
                    class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2 invalid:text-pink-600 invalid:outline-pink-500">
            </div>

            <br>

            <div>
                <label><b>Password</b></label><br>
                <input type="password" required placeholder="Enter Password" name="password"
                    class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
            </div>

            <br>

            <div class="justify-end flex">
                <button type="submit" class="w-2/5 text-primary-bright bg-secondary-dark rounded-xl p-2 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3" >
                    Sign up
                </button>
            </div>

            <br>

            <div>
                <p class="text-center">Already have an account? <a href="../login" class="text-blue-500 hover:text-blue-600 transition-all duration-150">Log in</a></p>
            </div>
        </form>
    </div>
</body>


<footer>
    <div>
        <p>
            Copyright Team 
        </p>
    </div>
</footer>

<h1>
    Login page
</h1>