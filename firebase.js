import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3e54bxuLrqCDdjVRSO2Kqu3UGJDdapIQ",
  authDomain: "whatsapp-clone-1e29f.firebaseapp.com",
  projectId: "whatsapp-clone-1e29f",
  storageBucket: "whatsapp-clone-1e29f.appspot.com",
  messagingSenderId: "504024688209",
  appId: "1:504024688209:web:5af9ca8025010ea13afa70"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
