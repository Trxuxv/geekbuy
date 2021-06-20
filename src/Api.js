import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line
const db = firebaseApp.firestore();


// eslint-disable-next-line
export default 
{
    googleLogar: async () => 
    {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
        
    }
}

