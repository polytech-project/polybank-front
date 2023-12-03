
import { Route } from '@polybank/routes'
import { PageLoginFeature } from './feature/page-login-feature'
import { PageLoginPanelFeature } from './feature/page-login-panel-feature'

export const ROUTER_LOGIN_CLIENT: Route[] = [
  {
    path: '',
    component: <PageLoginFeature />
  }
]

export const ROUTER_LOGIN_PANEL: Route[] = [
  {
    path: '',
    component: <PageLoginPanelFeature />
  }
]