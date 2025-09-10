import React from "react";

const RatingStars = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		stars.push(
			<span
				key={i}
				className={
					i <= rating
						? "ri-star-fill text-yellow-500"
						: "ri-star-line text-gray-300"
				}
			></span>
		);
	}

	return <div className="product__rating">{stars}</div>;
};

export default RatingStars;
