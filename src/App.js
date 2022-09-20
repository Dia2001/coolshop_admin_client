import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationContext } from "./Providers/ApplicationContext";
import { publicRouter } from "./Routes";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <ApplicationContext>
        <Routes>
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
        </Routes>
      </ApplicationContext>
    </BrowserRouter>
  );
}

export default App;
