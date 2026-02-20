<script>
	import { form } from "$app/server";

    import "../../app.css"


</script>

<title>Log In</title>

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
        </form>
    </div>
</body>


<body class="bg-primary-dark h-fit overflow-hidden">
    <div class="flex justify-center items-center h-svh">
        <form class="w-2/3 text-primary-bright w-min-50">
            <div>
                <label>Email:</label><br>
                <input type="email" required 
                    class="w-full bg-secondary-dark rounded-lg outline-3 outline-secondary-light p-3 mt-3">
            </div>

            <br>

            <div>
                <label><b>Password</b></label><br>
                <input type="password" required placeholder="Enter Password"
                    class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
                <label>Password:</label><br>
                <input type="password" required 
                    class="w-full bg-secondary-dark rounded-lg outline-3 outline-secondary-light p-3 mt-3">
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

<footer>
    <div>
        <p>
            Copyright Team 
        </p>
    </div>
</footer>
