// import { initialApp } from "firebase/app"
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Here i want to import the seed file

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBluEcmli6eerojIzRz3HVbuDnOdJL-szQ",
    authDomain: "instagram-clone-react-b48db.firebaseapp.com",
    projectId: "instagram-clone-react-b48db",
    storageBucket: "instagram-clone-react-b48db.appspot.com",
    messagingSenderId: "632449894490",
    appId: "1:632449894490:web:0ce01e3cb7a356c31d7063",
    measurementId: "G-1GVFDYMPD7"
}
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase);
console.log(FieldValue);
// Here is where i want to call the seed file

// seedDatabase(firebase)
export { firebase, FieldValue }


