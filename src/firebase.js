import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARWWIO-q8zRdVOUyuHO8bXp9uxpNTSR0s",
    authDomain: "enovatic-slack-clone.firebaseapp.com",
    projectId: "enovatic-slack-clone",
    storageBucket: "enovatic-slack-clone.appspot.com",
    messagingSenderId: "389111550821",
    appId: "1:389111550821:web:1e94cde424c6d08631478c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;
