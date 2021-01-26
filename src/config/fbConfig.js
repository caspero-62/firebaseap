import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ7JST6257-MeAstcBnS0fBIsIB6V7gcw",
    authDomain: "webdotplan.firebaseapp.com",
    databaseURL: "https://webdotplan.firebaseio.com",
    projectId: "webdotplan",
    storageBucket: "webdotplan.appspot.com",
    messagingSenderId: "353533127391",
    appId: "1:353533127391:web:55672919f8ba38ae57176a",
    measurementId: "G-1XS9XVB130"
};  

firebase.initializeApp(firebaseConfig);

// initialize firestore
firebase.firestore().settings({timestampsInSnapshots: true});

// export firebase
export default firebase;