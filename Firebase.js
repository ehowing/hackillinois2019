import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
	apiKey: "AIzaSyDFD77iox2nPG0B8gUmgYb9w3SC5R_liPQ",
	authDomain: "biblestudyhack1.firebaseapp.com",
	databaseURL: "https://biblestudyhack1.firebaseio.com",
	projectId: "biblestudyhack1",
	storageBucket: "biblestudyhack1.appspot.com",
	messagingSenderId: "646182523374"
  };
  firebase.initializeApp(config);


firebase.firestore().settings(settings);

export default firebase;
