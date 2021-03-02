import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA2MwAI_T8KQoZcv-IIn9gOxFn-xvVOkls",
    authDomain: "chatchat-bd5fb.firebaseapp.com",
    projectId: "chatchat-bd5fb",
    storageBucket: "chatchat-bd5fb.appspot.com",
    messagingSenderId: "690677654870",
    appId: "1:690677654870:web:746409ba5d31c449ffe2f7",
    measurementId: "G-44DS47NGCF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();