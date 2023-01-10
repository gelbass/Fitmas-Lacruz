import { LOGIN, SIGNUP } from '../actions/autenticacion.actions';

import React from 'react'

const initialState = {
  token: null,
  userId: null,
  error: null,
}

const AutenticacionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log("entre reducer SINGUP");
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
        password: action.password,
      }  
    case LOGIN:
      console.log("entre reducer LOGGIN");
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
        password: action.password,
      }
    default:
      console.log("reducer default");
      return state
  }
}

export default AutenticacionReducer;