import { Route, Routes } from "react-router";
import { Container } from "./ui/container";
import { ROUTER_CLIENT_PROJECTS } from "./router";

export function PageProjects () {
  return (
    <Container>
      <Routes>
        {ROUTER_CLIENT_PROJECTS.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Container>
  )
}