import { ROUTER_PANEL_HOME } from "./router";
import Container from "./ui/container";
import { Routes, Route } from 'react-router'

export function PageHome () {
  return (
    <Container>
      <Routes>
        { ROUTER_PANEL_HOME.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>    
    </Container>
  )
}