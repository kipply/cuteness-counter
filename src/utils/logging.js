import * as firebase from 'firebase';

function logError(err) {
  firebase.database().ref('/logs').push({
    code: err.code,
    message: err.message,
  });
}

export default logError;
