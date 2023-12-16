import {PROJECT_STATS_URL, PROJECTS_GENERAL_URL, Route} from "@polybank/routes"
import { PageGeneralFeature } from "./feature/page-general-feature"
import {PageProjectGeneralFeature} from "./feature/page-project-general-feature";
import {PageProjectStatsFeature} from "./feature/page-project-stats-feature";

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
    path: '/:projectId' + PROJECT_STATS_URL,
    component: <PageProjectStatsFeature />
  }
]
