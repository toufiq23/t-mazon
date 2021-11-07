import React from 'react'
import { useStateValue } from './ContextHook/StateProvider'
import "./CSS/Product.css"

function Product({ id, title, image, price, rating }) {
	const [state, dispatch] = useStateValue()
	console.log("this is basket: ", state)

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item:{
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			},
		})
	}

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating).fill().map((e, i) =>( 
						<div>
							<p>🌟</p>
						</div>
					))}
				</div>
			</div>

			<img src={image} alt="product_image" />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	)
}

export default Product
