import { ReactElement } from "react"
import Home from "."
interface RouterProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  darkMode?: boolean
}

export const ROUTER: RouterProps[] = [
  {
    path: '/',
    component: <Home />,
    protected: true,
    layout: true,
    darkMode: false
  }
]