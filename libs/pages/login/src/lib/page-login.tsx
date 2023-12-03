import { Route, Routes } from "react-router"
import { ROUTER_LOGIN_CLIENT } from "./router"

export function PageLogin() {
  return (
    <Routes>
      { ROUTER_LOGIN_CLIENT.map((route) => (
        <Route 
          key={route.path} 
          path={route.path} 
          element={route.component} 
        />
      ))}
    </Routes>
  )
}