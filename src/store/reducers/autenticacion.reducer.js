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
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
        password: action.password,
      }  
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
        password: action.password,
      }
    default:
      return state
  }
}

export default AutenticacionReducer;