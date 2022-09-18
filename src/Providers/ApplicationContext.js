import {useState,createContext} from 'react';
import React from 'react'
const AppContext=createContext();
const ApplicationContext = ({children}) => {
    
    const [userToken,SetUserToken] =useState('UserToken Nhan');
  return (
    <AppContext.Provider value={userToken}>
        {children}
    </AppContext.Provider>
  )
}

export {AppContext,ApplicationContext}

