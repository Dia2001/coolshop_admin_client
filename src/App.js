import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AppContext } from "./Providers/ApplicationContext";
import { publicRouter, privateRouter } from "./Routes";
import DefaultLayout from "./layouts/DefaultLayout";
import config from "./config";
import AuthService from './services/AuthService'

function App() {
  const { token, userLogin, setToken, setUserLogin } = useContext(AppContext)

  // Get userProfile khi user da login
  const fetchApiGetInfoUserLogin = async () => {

    // Neu khong co user trong context thi call api
    if (token !== '' && !userLogin) {
      const result = await AuthService.getProfile()

      // Neu token hop le thi luu thong tin user vao context nguoc lai thi xoa token 
      if (result.success) {
        setUserLogin(result.data)
      } else {
        localStorage.removeItem('token')
        setToken('')
      }
    }
  }

  // Lien tuc kiem tra khi app dang chay
  useEffect(() => {
    fetchApiGetInfoUserLogin()
  })

  return (
    <BrowserRouter>
      <Routes>
        {/* Mac dinh cho phep try cap cac roter public */}
        {publicRouter.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {token !== '' ? // Neu da dang nhap thi cho phep truy cap cac route private
          <>
            {privateRouter.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </>
          : // Nguoc lai chi cho phep route public
          <Route path="/*" element={<Navigate to={config.routes.login} replace />} />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
