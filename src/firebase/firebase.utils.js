import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCk48iMmWa3RY9-weqAScv1X7DporNzU2Q",
    authDomain: "react-ecommerce-ab09a.firebaseapp.com",
    databaseURL: "https://react-ecommerce-ab09a.firebaseio.com",
    projectId: "react-ecommerce-ab09a",
    storageBucket: "react-ecommerce-ab09a.appspot.com",
    messagingSenderId: "598871255735",
    appId: "1:598871255735:web:e2324668a01a55677f3b32"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShop = await userRef.get();
    if (!snapShop.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           }) 
        } catch (error) {
            console.log('error creando el usuario', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;