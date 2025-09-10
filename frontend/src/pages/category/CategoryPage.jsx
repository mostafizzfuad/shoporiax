import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const CategoryPage = () => {
	const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
        setFilteredProducts(filtered); 
    })

	return (
		<>
			<section className="section__container bg-[#f4e5ec]">
				<h2 className="section__header capitalize">{categoryName}</h2>
				<p className="section__subheader">
					Browse a diverse range of categories, from chic dresses to
					versatile accessories. Elevate your style today!
				</p>
			</section>

			{/* Products card */}
			<div className="section__container">
				<ProductCards products={filteredProducts} />
			</div>
		</>
	);
};

export default CategoryPage;
