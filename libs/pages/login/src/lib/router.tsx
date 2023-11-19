
import { Route } from '@polybank/routes'
import { PageLoginFeature } from './feature/page-login-feature'

export const ROUTER_LOGIN: Route[] = [
  {
    path: '',
    component: <PageLoginFeature />
  }
]