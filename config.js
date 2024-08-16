// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage , ref  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDn3Zpn5pFn3uryu6E38ggGoRxvRkwup84",
    authDomain: "blogging-app-e7b5d.firebaseapp.com",
    projectId: "blogging-app-e7b5d",
    storageBucket: "blogging-app-e7b5d.appspot.com",
    messagingSenderId: "1041028073768",
    appId: "1:1041028073768:web:16c7f3d566714e652aa81d",
    measurementId: "G-BBQ0HGBMDF"
  };

  // Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage , "profile");
export const auth = getAuth(app);
export {ref}
