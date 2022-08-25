import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDe01t1kuBroYqZBOr7y8dMyHk-8osNYqI",
    authDomain: "tesla-clone-6c008.firebaseapp.com",
    projectId: "tesla-clone-6c008",
    storageBucket: "tesla-clone-6c008.appspot.com",
    messagingSenderId: "368020443077",
    appId: "1:368020443077:web:766d8fd2a222ea979f45ac",
    measurementId: "G-J31DL4REMJ"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;