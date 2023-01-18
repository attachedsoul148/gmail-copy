import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBLn1unx1crqKSGQ-e7ZLrhlVZBsQRCfU8',
  authDomain: 'clone-d8f7f.firebaseapp.com',
  projectId: 'clone-d8f7f',
  storageBucket: 'clone-d8f7f.appspot.com',
  messagingSenderId: '227581317997',
  appId: '1:227581317997:web:ab638f2930e78bd6214064',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { app, db, auth, provider }
