
import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";
// import { getAuth } from 'firebase/auth';
// import {getFirestore} from "@firebase/firestore"
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCcSHRELwxwi_Hk2cA3aJiTx5eKQ4tM9a0",
    authDomain: "aidtaas.firebaseapp.com",
    databaseURL:"https://aidtaas-default-rtdb.firebaseio.com/",
    // databaseStorageURL:"gs://aidtaas.appspot.com/",
    projectId: "aidtaas",
    storageBucket: "aidtaas.appspot.com",
    messagingSenderId: "1073406400596",
    appId: "1:1073406400596:web:65cb37ce14d27cad23f5c1",
    measurementId: "G-RF85HMVMJ4"
  };
  
  // Initialize Firebase
  const app2 = initializeApp(firebaseConfig);
//   const auth=getAuth(app2)
  const database2=getDatabase(app2)
 const imgstorage=getStorage(app2)
 export {database2,imgstorage} ;