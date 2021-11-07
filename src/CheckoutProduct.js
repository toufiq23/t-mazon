import React from 'react'
import "./CSS/CheckoutProduct.css"
import { useStateValue } from './ContextHook/StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const [state, dispatch] = useStateValue()

	const removeFromBasket = () => {
		// remove the item from the basket
		dispatch({ 
			type: "REMOVE_FROM_BASKET", 
			id
		})
	} 

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} alt="checkoutProduct_image" />

			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating).fill().map((e, i) =>( 
						<div>
							<p>🌟</p>
						</div>
					))}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket</button>
				)}
			</div>
		</div>
	)
}

export default CheckoutProduct
