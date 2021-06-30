import firebase from 'firebase/app'; // tem que baixar primeira yarn add firebase

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAnqsPR26s-jH9kgIT35JRFnFNwjQIPuWg",
    authDomain: "publish-articles-5a753.firebaseapp.com",
    databaseURL: "https://publish-articles-5a753-default-rtdb.firebaseio.com",
    projectId: "publish-articles-5a753",
    storageBucket: "publish-articles-5a753.appspot.com",
    messagingSenderId: "1038663375307",
    appId: "1:1038663375307:web:9e3542b0440fa2c5873e4e"
};

firebase.initializeApp(firebaseConfig); //inicio

const auth = firebase.auth(); // vou exportar
const database = firebase.database()
  
export { firebase, auth, database }