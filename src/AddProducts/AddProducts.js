import React, { useState } from 'react'
import "./AddProducts.scss"
import { storage, db } from "../firebase"

// Using bootstrap here
function AddProducts() {
	const [productName, setProductName] = useState("")
	const [productPrice, setProductPrice] = useState(0)
	const [productImg, setProductImg] = useState(null)
	const [error, setError] = useState("")

	// Image types
	const types = ['image/png', 'image/jpeg']

	// Product image handler
	const productImgHandler = e => {
		let selectedFile = e.target.files[0]
		if(selectedFile && types.includes(selectedFile.type)){
			setProductImg(selectedFile)
			setError("")
		}else{
			setProductImg(null)
			setError("Please select a valid image type png or jpeg")
		}
	}

	// Adding product from submit event
	const handleAddProducts = e => {
		e.preventDefault()
		console.log("Add Product details : ", productName, productPrice, productImg);

		// Code for uploading images to firebase storage

		// Storing the image
		console.log("storage: ", storage.ref)
		const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg)
		uploadTask.on("state_changed", snapshot=>{
			const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
			console.log("progress: ", progress)
		}, err=>{
			setError(err.message)
		}, ()=>{
			// Getting product url and if success then storing the product in db
			storage.ref('product-images').child(productImg.name).getDownloadURL().then(url=>{
				db.collection('Products').add({
					productName: productName,
					productPrice: Number(productPrice),
					productImg: url
				}).then(()=>{
					setProductName('')
					setProductPrice(0)
					setProductImg('')
					setError('')
					document.getElementById('file').value = ''
				}).catch(err => setError(err.message))
			})
		})
	}

	return (
		<div className="container">
			<h1>Add Products</h1>
			<hr/>
			<form 
				autoComplete="off" 
				className="form-group"
				onSubmit={handleAddProducts}
			>
				<label htmlFor="product-name">Product Name</label>
				<br />
				<input 
					type="text" className="form-control" 
					onChange={e => setProductName(e.target.value)}
					value={productName}
					required  
				/>

				<br />
				<label htmlFor="product-price">Product Price</label>
				<br />
				<input 
					type="number" className="form-control" 
					onChange={e => setProductPrice(e.target.value)}
					value={productPrice}
					required  
				/>
				<br />
				<label htmlFor="product-img">Product Image</label>
				<br />
				<input 
					type="file" 
					className="form-control"
					id='file'
					onChange={productImgHandler} 
				/>
				<br />
				<button className="btn btn-success btn-md addProduct_btn">ADD Products</button>
			</form>
			<br />
			{error && <span className="text-danger fs-4">{error}</span>}
		</div>
	)
}

export default AddProducts
