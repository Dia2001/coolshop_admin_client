import { useState, createContext, useEffect } from 'react';
import React from 'react'

const AppContext = createContext();

// Context global cho ca ung dung
const ApplicationContext = ({ children }) => {

  // Khai bao cac state global
  const token = localStorage.getItem('token')
  const [userToken, setUserToken] = useState(token || ''); // Token khi user dang nhap 
  const [userLogin, setUserLogin] = useState(undefined) // Thong tin user dang dang nhap

  const logout = () => {
    setUserLogin(undefined)
    setUserToken('')
  }

  useEffect(() => {
    localStorage.setItem("token", userToken)
  }, [userToken])

  return (
    <AppContext.Provider value={{
      token: userToken,
      setToken: setUserToken,
      userLogin,
      setUserLogin,
      logout
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ApplicationContext }

