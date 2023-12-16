import {useParams} from "react-router";
import {useFetchProject} from "@polybank/domains/projects";
import {PageProjectStats} from "../ui/page-project-stats";

export function PageProjectStatsFeature() {
  const { projectId = '' } = useParams()

  const { data } = useFetchProject(projectId)

  return (
    <div>
      { data && (
        <PageProjectStats
          project={data}
        />
      )}
    </div>
  )
}
