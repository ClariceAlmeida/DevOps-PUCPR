import firebase from "firebase/compat/app"
import 'firebase/compat/firestore' 
import 'firebase/compat/auth';


const firebaseConfig: {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
} = {
  apiKey: "AIzaSyCaUK005Dl9RRrjfyAIOQ5MxviPWiZTRsY",
  authDomain: "tecnologias-dev-web-29df1.firebaseapp.com",
  projectId: "tecnologias-dev-web-29df1",
  storageBucket: "tecnologias-dev-web-29df1.firebasestorage.app",
  messagingSenderId: "79495322656",
  appId: "1:79495322656:web:28888628e993410313f045"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase