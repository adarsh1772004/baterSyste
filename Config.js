import firebase from 'firebase';
 require('@firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyDd58jqVuZ_-iVGXmFOurhEPiC2U37Bttw",
    authDomain: "book-santa-e0911.firebaseapp.com",
    projectId: "book-santa-e0911",
    databaseURL: "https://book-santa-e0911.firebaseio.com",
    
    storageBucket: "book-santa-e0911.appspot.com",
    messagingSenderId: "944519223304",
    appId: "1:944519223304:web:eeed1ba9ab06d4acf999bd"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
