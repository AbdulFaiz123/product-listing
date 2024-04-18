import Image from "next/image";
import { getProducts, Product } from "../api/getProducts";
import styles from "../app/dashboard/styles.module.css"

const Home = async () => {
	const products = await getProducts();
  return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">Product Listing Page</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
				{products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-110">
						<p className={styles.productId}>ProductId: {product.id}</p>
						<img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-2" />
						<div className="p-4">
							<h1 className="text-xl font-semibold mb-2 text-black">{product.name}</h1>
							{/* {JSON.stringify(post)} */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
