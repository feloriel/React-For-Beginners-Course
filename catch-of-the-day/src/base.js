import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAhySXyv_LHT0tbTjxnxvymQbT-pS_krQo',
  authDomain: 'catch-of-the-day-irina.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-irina.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
