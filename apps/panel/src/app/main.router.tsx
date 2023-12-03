import { ReactElement } from "react"
import { PageHome } from '@polybank/pages/panel/home'

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
  }
]