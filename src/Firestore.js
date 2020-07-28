import firebase from 'firebase';

var config = {
//github slack 알람체크 
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default firestore;

