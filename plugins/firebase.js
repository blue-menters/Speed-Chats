

import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBkgMTff5GFqWDqTHjt-jmg5caQQ3OOLq0",
  authDomain: "speed-chats.firebaseapp.com",
  databaseURL: "https://speed-chats.firebaseio.com",
  projectId: "speed-chats",
  storageBucket: "",
  messagingSenderId: "718343135810",
  appId: "1:718343135810:web:649254bc2237abe5"
};


firebase.initializeApp(firebaseConfig)

export default firebase
