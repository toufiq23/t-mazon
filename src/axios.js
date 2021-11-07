import axios from "axios"

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://us-central1-t-mazon.cloudfunctions.net/api"
	
	// Below is the base URL to work with firebase emulators:start to test without deploying the back end or a firebase Blaze Plan.
	// "http://localhost:5001/t-mazon/us-central1/api/" 
})

export default instance;