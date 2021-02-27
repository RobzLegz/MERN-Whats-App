import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHUSYbbTEr6cJEBV79FmoAm4Wg3IpQSIM",
    authDomain: "mern-whats-app-e31f2.firebaseapp.com",
    projectId: "mern-whats-app-e31f2",
    storageBucket: "mern-whats-app-e31f2.appspot.com",
    messagingSenderId: "642439259990",
    appId: "1:642439259990:web:7004bdfe88dcceba0798f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;