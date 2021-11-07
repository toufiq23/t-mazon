import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./CSS/Login.css"
import { auth } from "./firebase"

function Login() {
	//console.log("auth", auth)
	const history = useHistory()
	const [email, setEmail] = useState("")
	// console.log(email)
	const [password, setPassword] = useState("")
	// console.log(password)

	const signIn = e => {
		e.preventDefault()
		// fancy firebase login codes
		auth
				.signInWithEmailAndPassword(email, password)
				.then((auth) => {
					history.push("/")
				})
				.catch(error => alert(error.message))
	}
	const register = e => {
		e.preventDefault()
		
		// fancy firebase register codes
		auth
				.createUserWithEmailAndPassword(email, password)
				.then((auth) => {
					// it successfully created a new user with email and password
					console.log(auth)
					if(auth){
						history.push("/")
					}
				})
				.catch(error => alert(error.message))
	}

	return (
		<div className="login">
			<Link to="/">
				<img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Login amazon logo" />
			</Link>

			<div className="login_container">
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />

					<button 
						type="submit" 
						onClick={signIn} className="login_signInButton">Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
				</p>
				<button 
					type="submit" 
					onClick={register} className="login_registerButton">Create your Amazon Account
				</button>
			</div>
		</div>
	)
}

export default Login
