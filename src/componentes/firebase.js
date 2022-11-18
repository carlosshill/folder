// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCdvDSY5bZkZMY66TPKHKy0U4lgMcEnFg4',
    authDomain: 'portafolio-5f3a9.firebaseapp.com',
    projectId: 'portafolio-5f3a9',
    storageBucket: "portafolio-5f3a9.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
