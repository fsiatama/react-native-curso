import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyCZRCSz1HhnPYMLTQo73G4rSy_BPQjvh-U",
    authDomain: "platzimusic-5be10.firebaseapp.com",
    databaseURL: "https://platzimusic-5be10.firebaseio.com",
    storageBucket: "platzimusic-5be10.appspot.com",
    messagingSenderId: "963920692689"
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase