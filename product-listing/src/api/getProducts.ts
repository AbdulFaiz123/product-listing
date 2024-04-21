
export interface Product {
    id: number,
    name: string,
    image: string
}


export async function getProducts(): Promise<Product[]>  {
    try {
        let url = "https://mock-gjfh678x3-faiz002s-projects.vercel.app/product";        
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        return response.json()
    } catch (error) {
        console.error("Error fetching products:", error);
        return []
    }
   

} 
