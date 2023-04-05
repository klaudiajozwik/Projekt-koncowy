import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore"
import { getDatabase } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
        apiKey: "AIzaSyAhtmQ2vTbtPV6Mj5qOjKRa53tilJ0a8l4",
        authDomain: "rjournal-3bdc7.firebaseapp.com",
        databaseURL: "https://rjournal-3bdc7-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "rjournal-3bdc7",
        storageBucket: "rjournal-3bdc7.appspot.com",
        messagingSenderId: "435112940494",
        appId: "1:435112940494:web:eb5b38faa79d839ae6519f",
        measurementId: "G-GL6SDKCDPH"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export const firestore = getFirestore(app)
export {database}


