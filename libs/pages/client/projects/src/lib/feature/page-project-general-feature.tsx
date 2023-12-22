import {PageProjectGeneral} from '../ui/page-project-general'
import {useParams} from 'react-router'
import {useEffect} from 'react'
import {useFetchProject} from '@polybank/domains/projects'

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
          project={data.project}
          expense={data.expenses}
          balances={data.balances}
          transactions={data.project.transactions}
        />
      )}


    </div>
  )
}
