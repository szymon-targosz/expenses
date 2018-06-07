import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDx8qC66WFgu7mxOfzCGbeRfYG2_fpR_mk",
    authDomain: "expensify-96874.firebaseapp.com",
    databaseURL: "https://expensify-96874.firebaseio.com",
    projectId: "expensify-96874",
    storageBucket: "expensify-96874.appspot.com",
    messagingSenderId: "465216085580"
};

firebase.initializeApp(config);
const database = firebase.database();

export { database as default, firebase };