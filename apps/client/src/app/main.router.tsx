import { ReactElement } from "react"
import Home from "./pages/home"
import { PageProjects } from '@polybank/pages/client/projects'
interface RouterProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  darkMode?: boolean
}

export const ROUTER: RouterProps[] = [
  {
    path: '/home',
    component: <Home />,
    protected: true,
    layout: true,
    darkMode: false
  },
  {
    path: '/projects/*',
    component: <PageProjects />,
    protected: true,
    layout: true,
    darkMode: false
  }
]