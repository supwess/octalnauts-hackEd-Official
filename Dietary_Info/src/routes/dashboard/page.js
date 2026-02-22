import { OpenFoodFacts } from "@openfoodfacts/openfoodfacts-nodejs";

// or if you're on Node.js, you can pass the global fetch function
const client = new OpenFoodFacts(globalThis.fetch);

export async function displayProduct() {
    const barcode = document.getElementById("barcode").value;
    const { data, error } = await client.getProductV3(barcode);
    if (!data) {
        document.getElementById("output").textContent = `Error fetching product: ${error}`;
        return;
    }
    document.getElementById("output").textContent = `Product data: ${JSON.stringify(data, null, 2)}`;
}

// (async () => {
//   // then you can use the client to access the Open Food Facts API
//   const { data, error } = await client.getProductV3("5000112546415");
//   if (!data) {
//     console.error("Error fetching product:", error);
//     return;
//   }
//   console.log("Product data:", data);
// })();
