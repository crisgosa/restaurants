import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdwNXSCQSJsZQ7UaL89-z3qdqGA8I6PCQ",
    authDomain: "restaurants-9fc81.firebaseapp.com",
    projectId: "restaurants-9fc81",
    storageBucket: "restaurants-9fc81.appspot.com",
    messagingSenderId: "787872909773",
    appId: "1:787872909773:web:88ee4aee17ed48cf989c84"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
