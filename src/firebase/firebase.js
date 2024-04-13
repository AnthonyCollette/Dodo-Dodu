import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBH41iSZWgUb4MsJO2K3HiT7VBGif-d7Dw",
    authDomain: "dodododu-50245.firebaseapp.com",
    projectId: "dodododu-50245",
    storageBucket: "dodododu-50245.appspot.com",
    messagingSenderId: "869779477493",
    appId: "1:869779477493:web:cf83a9ac56aae099eac6bc",
    measurementId: "G-LBFJJSH9KG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }