import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from './firebase.init';
export const gymAuth = createContext()
const AuthProvider = ({children}) => {


    const usersRegister = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const usersLogin = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }




    const authObj = {
        person : "azmir",
        usersRegister,
        usersLogin
    }

    return (
        <div>
            <gymAuth.Provider value={authObj}>
                {children}
            </gymAuth.Provider>
        </div>
    );
};

export default AuthProvider;