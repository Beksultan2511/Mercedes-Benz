import React, { createContext, useEffect, useReducer } from 'react';
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut, getAuth} from 'firebase/auth'
import {auth} from '../firebase'

export const authContext = createContext()
const INIT_STATE = {
    user: null
}
const reducer = (state,action)=>{
    switch(action.type){

    case 'CHECK_USER':
        return {
            ...state,
            user: action.payload
        }
        default:
            return state
    }
}

const AuthProvider = (props) => {
    const [state,dispatch] = useReducer(reducer,INIT_STATE)

    const googleProvider = new GoogleAuthProvider()
    const authWithGoogle = async () => {
        try{
            const response = await signInWithPopup(auth, googleProvider)
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    const checkUser = () =>{
        onAuthStateChanged(auth, (user)=>{
            let action = {
                type: 'CHECK_USER',
                payload: user
            }
            dispatch(action)
        })
    }
    useEffect(()=>{
        checkUser()
    },[])

    async function logout(){
        try{
            await signOut(auth)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <authContext.Provider value={{authWithGoogle,logout, user:state.user}}>
            {props.children}
        </authContext.Provider>
    );
};

export default AuthProvider;