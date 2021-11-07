import React from 'react'
import "./CSS/Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct.js'
import { useStateValue } from './ContextHook/StateProvider'

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue()

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img 
					className="checkout_ad" src="./images/checkout_banner.jpeg" alt="amazon_banner" 
				/>
				<div>
				<h3>{user?.email}</h3>
					<h2 className="checkout_title">Your shopping Basket</h2>

					{basket.map(item => (
						<CheckoutProduct 
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	)
}

export default Checkout
