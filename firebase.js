import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCT6yZOiO2rI7SmDNi5VGCBaixzBl1BO-c",
  authDomain: "appfood-123456789.firebaseapp.com",
  projectId: "appfood-123456789",
  storageBucket: "appfood-123456789.appspot.com",
  messagingSenderId: "505269255180",
  appId: "1:505269255180:web:ca3d3c0995146ab005c229",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
