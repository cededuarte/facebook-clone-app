import firebase from 'firebase'

    const firebaseConfig = {
    apiKey: "AIzaSyCgXeO--RKHcIBsxMChNiqgf8smMP9rOWQ",
    authDomain: "facebook-clone-332e6.firebaseapp.com",
    databaseURL: "https://facebook-clone-332e6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "facebook-clone-332e6",
    storageBucket: "facebook-clone-332e6.appspot.com",
    messagingSenderId: "164569437620",
    appId: "1:164569437620:web:46da38b365f7dbac02cee1",
    measurementId: "G-TLPW41C2PE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db



