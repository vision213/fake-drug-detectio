// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDb32fWPPDsuZ8HeB1RQgXAL0cGu2besY",
    authDomain: "drug-detection-29e9c.firebaseapp.com",
    projectId: "drug-detection-29e9c",
    storageBucket: "drug-detection-29e9c.appspot.com",
    messagingSenderId: "423202422117",
    appId: "1:423202422117:web:7b31e7b624cb09aea5758c",
    measurementId: "G-QQYSYYKJP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Submit button event listener
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault();
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location.href = "login.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle errors
            console.error(errorMessage);
        });
});