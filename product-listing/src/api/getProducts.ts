import {REACT_HOST_API} from "../utils/constant"

export interface Product {
    id: number,
    name: string,
    image: string
}


export async function getProducts(id?:string): Promise<Product[]>  {
    try {
        let url = `${REACT_HOST_API}/product`;
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
