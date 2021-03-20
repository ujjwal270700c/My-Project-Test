import React,{useReducer} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import {
    REGISTER_USER,
    EMPLOY

   
} from "./action";


const AuthState = (props) => {
    const initialState={
        user:null,
        employee:[]
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const registeruser=async (formData,history)=>{
        dispatch({
            type:REGISTER_USER,
            payload:formData
        })
        history.push('/')
    }
    const employdata=async (formData)=>{
        dispatch({
            type:EMPLOY,
            payload:formData
        })
  
    }
    return (
        <AuthContext.Provider value={{
            user:state.user,
            employee:state.employee,
            registeruser,
            employdata
        }}>
         {props.children}   
        </AuthContext.Provider>
    )
}

export default AuthState
