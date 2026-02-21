<script>
    import "../../app.css"
</script>

<div class="bg-primary-dark h-fit overflow-hidden">
    <div class="flex justify-center items-center h-svh">

    <a href="/dashboard" class="absolute top-30 left-8 text-lg text-primary-bright bg-secondary-dark rounded-xl p-7 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3">
        Back to Dashboard
    </a>
        <form method="POST" class="w-2/3 text-primary-bright">
            <div>
                <h1 class="text-center text-4xl"><b>Enter Dietary Restrictions</b></h1>
                <p class="text-center">one food at a time please</p>
            </div>

            <br>
                <div>
                    <label><b>Restricted Foods</b></label><br>
                    <input type="text" placeholder="Enter food restriction" name="food_name"
                        class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
                </div>
            <br>

            <div class="justify-end flex">
                <button type="submit" class="w-2/5 text-primary-bright bg-secondary-dark rounded-xl p-2 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3" >
                    Enter
                </button>
            </div>

            <br>
                <div>
                    <label><b>Allergies</b></label><br>
                    <input type="text" placeholder="Enter allergy restriction" name="allergy_name"
                        class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
                </div>
            <br>

            <div class="justify-end flex">
                <button type="submit" class="w-2/5 text-primary-bright bg-secondary-dark rounded-xl p-2 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3" >
                    Enter
                </button>
            </div>

            <br>
                <div>
                    <label><b>Daily Calorie Goal</b></label><br>
                    <input type="text" placeholder="Enter calorie goal" name="allergy_name"
                        class="w-full bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
                </div>
            <br>

            <div class="justify-end flex">
                <button type="submit" class="w-2/5 text-primary-bright bg-secondary-dark rounded-xl p-2 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3" >
                    Enter
                </button>
            </div>

        </form>
    </div>
</div>