import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBPZjRkskR-titsI68gtDEcjysWESmKfko',
  authDomain: 'prinart-clothing-37484.firebaseapp.com',
  databaseURL: 'https://prinart-clothing-37484.firebaseio.com',
  projectId: 'prinart-clothing-37484',
  storageBucket: '',
  messagingSenderId: '92084315669',
  appId: '1:92084315669:web:f30495efd2df7ec0',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
