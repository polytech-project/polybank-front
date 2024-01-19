import {PROJECT_REFUND_URL, PROJECT_SETTLEUP_URL, PROJECTS_GENERAL_URL, Route} from "@polybank/routes"
import { PageGeneralFeature } from "./feature/page-general-feature"
import {PageProjectGeneralFeature} from "./feature/page-project-general-feature";
import {PageProjectSettleupFeature} from "./feature/page-project-settleup-feature";
import {PageTransactionGeneralFeature} from "./feature/page-transaction-general-feature";
import { PageProjectRefundFeature } from "./feature/page-project-refund-feature";

export const ROUTER_CLIENT_PROJECTS: Route[] = [
  {
    path: '/',
    component: <PageGeneralFeature />
  },
  {
    path: "/:projectId" + PROJECTS_GENERAL_URL,
    component: <PageProjectGeneralFeature />
  },
  {
    path: '/:projectId' + PROJECT_SETTLEUP_URL,
    component: <PageProjectSettleupFeature />
  },
  {
    path: '/:projectId' + PROJECT_REFUND_URL,
    component: <PageProjectRefundFeature />
  },
  {
    path: '/:projectId/transactions/:transactionId',
    component: <PageTransactionGeneralFeature />
  }
]
