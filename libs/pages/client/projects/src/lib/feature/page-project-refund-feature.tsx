import { useFetchProject, useFetchRefunds } from "@polybank/domains/projects";
import { useParams } from "react-router";
import { PageProjectRefund } from "../ui/page-project-refund";

export function PageProjectRefundFeature () {
  const { projectId = '' } = useParams()

  const { data } = useFetchProject(projectId)
  const { data: refunds } = useFetchRefunds(projectId)



  return (
    <div>
      { data && refunds && (
        <PageProjectRefund 
          project={data.project}
          expense={data.expenses}
          balances={data.balances}
          transactions={data.project.transactions}
          refunds={refunds}
        />
      )}
    </div>
  )
}