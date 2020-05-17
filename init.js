var firebase=require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyA2tMDEZFn_m_8eM3Bk9qPw5Clbr1hfIC4",
    authDomain: "smart-grid-9d2c0.firebaseapp.com",
    databaseURL: "https://smart-grid-9d2c0.firebaseio.com",
    projectId: "smart-grid-9d2c0",
    storageBucket: "smart-grid-9d2c0.appspot.com",
    messagingSenderId: "400973548030",
    appId: "1:400973548030:web:cf1301d7e7ab4b011b58af"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

var db=firebase.firestore()

module.exports={db,firebase};
