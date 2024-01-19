import PageGeneral from "../ui/page-general";
import {useFetchProjects} from "@polybank/domains/projects";
import {useEffect} from "react";

export default function PageGeneralFeature () {
  const { data, isLoading } = useFetchProjects({ transactions: true, users: true  })

  useEffect(() => {
    console.log(data)
  }, [data]);

  if (isLoading || !data) {
    return <>loading...</>
  }
  return (
    <PageGeneral
      projects={data}
    />
  )
}
