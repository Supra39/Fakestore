// firebase.js
var firebaseConfig = {
    apiKey: "DIN_API_KEY",
    authDomain: "DITT_PROJECT_ID.firebaseapp.com",
    projectId: "DITT_PROJECT_ID",
    storageBucket: "DITT_PROJECT_ID.appspot.com",
    messagingSenderId: "DIN_MESSAGING_SENDER_ID",
    appId: "DIN_APP_ID"
};

// Initiera Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
