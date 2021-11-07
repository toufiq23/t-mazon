import React, { useEffect } from 'react';
import './CSS/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout"
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from "./firebase"
import { useStateValue } from './ContextHook/StateProvider';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51JpqOYAOXgOi7Cynrwq6SsC04bUFzvlpTLQBVi6GJTyalcBw9SMBt2BfuLvNm6sh8ocUXHlU1j7H1jwuWf3zVzcg00PAMBmxhf")

function App() {
	const [{}, dispatch] = useStateValue()

	useEffect(() => {
		// It will run only once when the app component loads..
		auth.onAuthStateChanged(authUser => {
			console.log("The USER is: ", authUser)

			if(authUser){
				// The user just logged in / the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser
				})
			} else {
				// The user is logged out
				dispatch({
					type: "SET_USER",
					user: null
				})
			}
		})
	}, [])

  return (
		// BEM naming Convention
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route exact path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route exact path="/payment">
						<Header />
						{/* Higher Order Component */}
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route exact path="/">
						<Header />
						<Home />
						{/* Header */}
						{/* Home */}
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
  );
}

export default App;
