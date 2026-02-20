import  { OpenFoodFacts } from '@openfoodfacts/openfoodfacts-nodejs';

export function GET() {
    const client = new OpenFoodFacts(globalThis.fetch);
    
    (async () => {
        // Access the Open Food Facts API
        const { data, error } = await client.getProduct("5000112546415");
        if (!data) {
            console.error("Error fetching product:", error);
            return;
        }
        console.log("Product data:", data);

        return data
    })();
}