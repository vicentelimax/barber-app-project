import firebase from 'react-native-firebase';
import { initializeApp  } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-cYg5dXGBi2jY5nLeJnPlyQfZg7uSdL4",
    authDomain: "barber-shop-eb699.firebaseapp.com",
    projectId: "barber-shop-eb699",
    storageBucket: "barber-shop-eb699.appspot.com",
    messagingSenderId: "244207269412",
    appId: "1:244207269412:web:c98d80626202b9285b8ab1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(firebase);

export { db, auth }