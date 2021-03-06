import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_APIKEY,
  authDomain: process.env.VUE_APP_FB_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASEURL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FB_APPID
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
// const postsCollection = db.collection("posts");
// const commentsCollection = db.collection("comments");
// const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection
  // postsCollection,
  // commentsCollection,
  // likesCollection,
};
