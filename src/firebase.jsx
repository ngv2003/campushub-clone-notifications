import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE7BmbPcdyLZ169znKEKLQ42aKeMe_8sc",
  authDomain: "campushub2.firebaseapp.com",
  projectId: "campushub2",
  storageBucket: "campushub2.appspot.com",
  messagingSenderId: "178522875132",
  appId: "1:178522875132:web:4243a58886d4975a79e379",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
