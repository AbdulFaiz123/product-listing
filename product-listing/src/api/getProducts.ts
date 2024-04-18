export interface Product {
    id: number,
    name: string,
    image: string
}


export async function getProducts(id?:string): Promise<Product[]>  {
    try {
        let url = "http://localhost:3001/product" 
        if(id) {
            url += "?id=" + id 
        }        
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