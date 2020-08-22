import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore" 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZKpnxnLc-XS2xpQetMMq2ob-xcYT3D2Y",
    authDomain: "singh-photogram.firebaseapp.com",
    databaseURL: "https://singh-photogram.firebaseio.com",
    projectId: "singh-photogram",
    storageBucket: "singh-photogram.appspot.com",
    messagingSenderId: "555453716964",
    appId: "1:555453716964:web:03781bd949ba2121becff1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }