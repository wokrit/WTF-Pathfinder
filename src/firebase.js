// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { writeBatch } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: 'https://wtf-pathfinder-c9f7b-default-rtdb.firebaseio.com/'
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function writeUserData(userId, name, email){
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId)
  
  set(reference, {
    username:name,
    email:email,

  });
}

export const auth = getAuth(app);
export default app;
