import { useState } from "react";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const TrendingProducts = () => {
	const [visibleProducts, setVisibleProducts] = useState([8]);

	return (
		<section className="section__container product__container">
			<h2 className="section__header">Trending Products</h2>
			<p className="section__subheader">
				Discover the Hottest Picks: Elevate Your Style with Our Curated
				Collection of Trending Women's Fashion Products.
			</p>

			{/* products card */}
			<div style={{ marginTop: "2.5rem" }}>
				<ProductCards products={products.slice(0, visibleProducts)} />
			</div>

			{/* load more button */}
			<div className="product__btn">
				{visibleProducts < products.length && (
					<button
						className="btn"
						onClick={() => setVisibleProducts((prev) => prev + 4)}
					>
						Load More
					</button>
				)}
			</div>
		</section>
	);
};

export default TrendingProducts;
