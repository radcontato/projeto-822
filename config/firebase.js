import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxyiIdZK-bsQ6zhoyV7XbR6isa0z68vYo",
  authDomain: "projeto-dataextract.firebaseapp.com",
  databaseURL: "https://projeto-dataextract.firebaseio.com",
  projectId: "projeto-dataextract",
  storageBucket: "projeto-dataextract.appspot.com",
  messagingSenderId: "279208106435",
  appId: "1:279208106435:web:c6dc66b98365a4b1b8c576",
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();