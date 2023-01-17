import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA9o6s5uaKdIpLb5bPjs_6cBI7J4OxSkMM",
  authDomain: "messyfeed-d1b47.firebaseapp.com",
  projectId: "messyfeed-d1b47",
  storageBucket: "messyfeed-d1b47.appspot.com",
  messagingSenderId: "595776529865",
  appId: "1:595776529865:web:9430c44597d344f2943418",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
