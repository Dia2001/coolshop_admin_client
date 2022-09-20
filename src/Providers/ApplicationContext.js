import { useState, createContext } from 'react';
import React from 'react'

const AppContext = createContext();

// Context global cho ca ung dung
const ApplicationContext = ({ children }) => {

  // Khai bao cac state global
  const token = localStorage.getItem('token')
  const [userToken, setUserToken] = useState(token || ''); // Token khi user dang nhap 
  const [userLogin, setUserLogin] = useState(undefined) // Thong tin user dang dang nhap

  return (
    <AppContext.Provider value={{
      token: userToken,
      setToken: setUserToken,
      userLogin,
      setUserLogin
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ApplicationContext }

