import { Navigate, Route, Routes } from "react-router";
import { LOGIN_URL } from '@polybank/routes'
import { PageLogin } from '@polybank/pages/login'
import { Layout } from '@polybank/pages/layout'
import { ROUTER } from "./main.router"

export default function App() {
  return (
    <div>
        <Routes>

          <Route path={`${LOGIN_URL}/*`} element={<PageLogin />} />
          { ROUTER.map((route) => 
            route.layout ? (
              <Route
                key={route.path}
                path={route.path}
                element={
                  !route.protected ? (
                    <>
                      <Layout>{ route.component }</Layout>
                    </>
                  ) : (
                    <>
                      <Layout>{ route.component }</Layout>
                    </>
                  )
                }
              />
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element={!route.protected ? route.component : <>{ route.component }</>}
              />
            )
          )}
          <Route path="*" element={<Navigate replace to={LOGIN_URL} />} />
        </Routes>
    </div>
  )
}
