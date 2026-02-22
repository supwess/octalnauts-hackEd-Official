<script>
// @ts-nocheck

    import "../../app.css";
    import { OpenFoodFacts } from "@openfoodfacts/openfoodfacts-nodejs"

    const client = new OpenFoodFacts(globalThis.fetch);

    async function displayProduct() {
        const barcode = document.getElementById("barcode").value;
        const { data, error } = await client.getProductV3(barcode);
        if (!data) {
            console.log(error);
            window.alert(`Error fetching product: ${error}`);
            document.getElementById("brand").textContent = `Error fetching product: ${error}`;
            return;
        }
        console.log(typeof data);
        console.log(data);
        document.getElementById("brandLabel").textContent = "Brand";
        document.getElementById("productNameLabel").textContent = "Product Name";
        document.getElementById("caloriesLabel").textContent = "Calories";
        document.getElementById("brand").textContent = data.product.brands;
        document.getElementById("productName").textContent = data.product.product_name;
        document.getElementById("calories").textContent = `${data.product.nutriments["energy-kcal"]} kcal`;
    }
</script>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

<main class="h-svh bg-primary-dark">
    <br>
    <!-- Change: added flex-col and items-center -->
    <div class="flex flex-col items-center h-svh"> 
        
        <form class="w-2/3 text-primary-bright">
            <div class="flex flex-col justify-center items-center">
                <label><b>Enter a Barcode:</b></label>
                <input type="number" id="barcode" required placeholder="Enter Barcode"
                    class="w-full max-w-md bg-secondary-dark rounded-lg outline-2 outline-secondary-light p-3 mt-2">
                <button type="button" class="w-32 text-primary-bright bg-secondary-dark rounded-xl p-2 hover:bg-secondary-light hover:cursor-pointer transition-all duration-150 mt-3" on:click={displayProduct}>
                    Search
                </button>
            </div>
        </form>

        <br>

        <div class="w-2/3 text-primary-bright">
            <p id="brandLabel" class="text-xl font-bold"></p>
            <p id="brand"></p>
            <br>
            <p id="productNameLabel" class="text-xl font-bold"></p>
            <p id="productName"></p>
            <br>
            <p id="caloriesLabel" class="text-xl font-bold"></p>
            <p id="calories"></p>
        </div>
        
    </div>
</main>

    

