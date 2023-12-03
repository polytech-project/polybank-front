import { Route } from "@polybank/routes"
import { PageGeneralFeature } from "./feature/page-general-feature"

export const ROUTER_CLIENT_PROJECTS: Route[] = [
  {
    path: '/',
    component: <PageGeneralFeature />
  }
]