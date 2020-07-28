import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAMRHyFA4nbOkMKfbdtaEBfnjSjPbHVttI",
    authDomain: "fir-example-c82e9.firebaseapp.com",
    databaseURL: "https://fir-example-c82e9.firebaseio.com",
    projectId: "fir-example-c82e9",
    storageBucket: "fir-example-c82e9.appspot.com",
    messagingSenderId: "385462606931"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default firestore;

