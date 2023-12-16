import { ReactElement } from "react"
import { PageHome } from '@polybank/pages/panel/home'
import {PageProjects} from "@polybank/pages/panel/projects";

interface RouterProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  darkMode?: boolean
  topBar?: boolean
}

export const ROUTER: RouterProps[] = [
  {
    path: '/*',
    component: <PageHome />,
    protected: true,
    layout: true,
    topBar: true
  },
  {
    path: "/projects/*",
    component: <PageProjects />,
    protected: true,
    layout: true,
    topBar: true
  }
]
