import {PageProjectGeneral} from '../ui/page-project-general'
import {useParams} from 'react-router'
import {useEffect} from 'react'
import {fetchProject, useFetchProject} from '@polybank/domains/projects'
import {useDispatch} from "react-redux";
import {AppDispatch} from "@polybank/state/store";

export function PageProjectGeneralFeature () {
  const { projectId = '' } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const { data } = useFetchProject(projectId)


  useEffect(() => {
    if (data) {
      dispatch(fetchProject(data.project))
    }
  }, [data, dispatch]);

  //const project = useSelector()
  return (
    <div>

      { data && (
        <PageProjectGeneral
          project={data.project}
          expense={data.expenses}
          balances={data.balances}
          transactions={data.project.transactions}
        />
      )}


    </div>
  )
}
