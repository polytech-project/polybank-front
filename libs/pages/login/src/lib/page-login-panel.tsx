import { Route, Routes } from "react-router";
import { ROUTER_LOGIN_PANEL } from "./router";

export function PageLoginPanel () {
  return (
    <Routes>
      { ROUTER_LOGIN_PANEL.map((route) => (
        <Route 
          key={route.path} 
          path={route.path} 
          element={route.component}
        />
      ))}
    </Routes>
  )
}