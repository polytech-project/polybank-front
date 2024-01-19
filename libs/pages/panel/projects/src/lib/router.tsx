import { Route } from '@polybank/routes'
import PageGeneralFeature from "./feature/page-general-feature";

export const ROUTER_PANEL_PROJECTS: Route[] = [
  {
    path: '/',
    component: <PageGeneralFeature />
  },
]
