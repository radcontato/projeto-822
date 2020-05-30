import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXHOQCYfD84BmItdHONToioRlNqHPGbBM",
  authDomain: "projeto-822.firebaseapp.com",
  databaseURL: "https://projeto-822.firebaseio.com",
  projectId: "projeto-822",
  storageBucket: "projeto-822.appspot.com",
  messagingSenderId: "536470965945",
  appId: "1:536470965945:web:3de6b5fd4d185ce8d55568"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();