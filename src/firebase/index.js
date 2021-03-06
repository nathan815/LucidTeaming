import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
firebase.database = new firebase.firestore();
firebase.database.settings({timestampsInSnapshots: true});

export default firebase;
