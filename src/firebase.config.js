import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZp9OVv2WyyxrS6IhUej_RgpEwBBesCXE",
  authDomain: "otp-project-1c7a2.firebaseapp.com",
  projectId: "otp-project-1c7a2",
  storageBucket: "otp-project-1c7a2.appspot.com",
  messagingSenderId: "1057684251986",
  appId: "1:1057684251986:web:7af946a38015fc6458068b",
  measurementId: "G-1HP5P3BZBJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

//this code is picked up from firebase/authentication/phone number
