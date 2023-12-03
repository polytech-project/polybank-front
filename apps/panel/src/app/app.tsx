import { Navigate, Route, Routes } from "react-router";
import { LOGIN_URL } from '@polybank/routes'
import { PageLoginPanel } from '@polybank/pages/login'
import { LayoutPanel } from '@polybank/pages/layout'
import { ROUTER } from "./main.router"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={`${LOGIN_URL}/*`} element={<PageLoginPanel />} />
        { ROUTER.map((route) =>
          route.layout ? (
            <Route 
              key={route.path}
              path={route.path}
              element={
                <LayoutPanel>{ route.component }</LayoutPanel>
              }
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )
        
        )}
        <Route path="*" element={<Navigate replace to={LOGIN_URL} />} />
      </Routes>
    </div>
  )
}