// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

//  import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFuOTE9uXVhPSUq4aGvMVkj_r-MBY8VzQ",
    authDomain: "linkedin-clone-3ff78.firebaseapp.com",
    projectId: "linkedin-clone-3ff78",
    storageBucket: "linkedin-clone-3ff78.appspot.com",
    messagingSenderId: "422596497240",
    appId: "1:422596497240:web:1863bc340f6a6f384d9f2d",
    measurementId: "G-55ZXJ62Z5W"
  };


   const firebaseApp = firebase.initializeApp(firebaseConfig);

  

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage();


  export { auth, provider, storage};
  
   export default db;