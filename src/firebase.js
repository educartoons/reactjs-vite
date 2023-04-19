// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import "firebase/firestore"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIl2K6d75ozkn8aYZ6PcCFDL_kJ_wtS3g',
  authDomain: 'testing-store-nike.firebaseapp.com',
  projectId: 'testing-store-nike',
  storageBucket: 'testing-store-nike.appspot.com',
  messagingSenderId: '702917198788',
  appId: '1:702917198788:web:79ef2dfcd3ffde8aca5a91',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

window.firebase = app;

export const db = getFirestore(app);

export default app;
