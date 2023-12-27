import {useParams} from "react-router";
import {useFetchProject} from "@polybank/domains/projects";
import {useEffect, useState} from "react";
import {PageProjectSettleup} from "../ui/page-project-settleup";
import {Balance} from "@polybank/interfaces";


function getExtremeBalance(balances: Balance[], isMax: boolean) {
  if (!balances || balances.length === 0) {
    return null
  }

  return parseFloat(balances.reduce((acc, current) => {
    if (isMax) {
      return current.amount > acc.amount ? current : acc
    } else {
      return current.amount < acc.amount ? current : acc
    }
  }, balances[0]).amount)
}

export function PageProjectSettleupFeature() {
  const { projectId = '' } = useParams()
  const [extremeBalance, setExtremeBalance] = useState<undefined | number | null>()
  const { data } = useFetchProject(projectId)

  useEffect(() => {
    if (data && data.balances) {
      setExtremeBalance(getExtremeBalance(data.balances, true))
    }
  }, [data]);

  return (
    <div>
      { data && extremeBalance &&
        <PageProjectSettleup
          balances={data!.balances}
          project={data!.project}
          expense={data.expenses}
          extremeBalance={extremeBalance}
        />
      }
    </div>
  )
}
