// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
	apiKey: "AIzaSyDRA7ilLA9VjeGfubQ8aam_PDjdpFaDb0s",
	authDomain: "who-would-win-bc248.firebaseapp.com",
	projectId: "who-would-win-bc248",
	storageBucket: "who-would-win-bc248.appspot.com",
	messagingSenderId: "687184574727",
	appId: "1:687184574727:web:8de3a506a712fba8b3ada2"
});
// console.log(firebaseConfig);

// Initialize Firebase
const db = getFirestore(firebaseConfig);
// console.log(db);


export default db;