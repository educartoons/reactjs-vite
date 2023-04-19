import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfs7g6YYVmp3QpmdghhpZFvdSVdiYNmVQ',
  authDomain: 'reactj-nike-store.firebaseapp.com',
  projectId: 'reactj-nike-store',
  storageBucket: 'reactj-nike-store.appspot.com',
  messagingSenderId: '10005705519',
  appId: '1:10005705519:web:76a5661a4b5678a59aa7da',
};

const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore(app);

export { db };
