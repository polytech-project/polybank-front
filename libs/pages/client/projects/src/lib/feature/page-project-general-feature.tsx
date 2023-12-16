import {PageProjectGeneral} from "../ui/page-project-general";
import {useParams} from "react-router";
import {useEffect} from "react";
import {projects, useFetchProject} from "@polybank/domains/projects";
import {useSelector} from "react-redux";
import {Skeleton} from "@polybank/ui";

export function PageProjectGeneralFeature () {
  const { projectId = '' } = useParams()

  const { data } = useFetchProject(projectId)


  useEffect(() => {
    console.log(data)
  }, [data]);

  //const project = useSelector()
  return (
    <div>

      { data && (
        <PageProjectGeneral
          project={data}
          expenses={[]}
        />
      )}


    </div>
  )
}
