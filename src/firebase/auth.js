import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, signInWithPopup, updateProfile, deleteUser, getAuth } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch(err => console.log(err))
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    
    return result
}

export const doUpdateUser = async (data) => {
    return updateProfile(auth.currentUser, data)
}

export const doSignOut = () => {
    return auth.signOut()
}

export const doDeleteUser = async () => {
    return deleteUser(getAuth().currentUser)
}

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email)
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password)
// }

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/`,
//     })
// }