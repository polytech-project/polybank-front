import { PageGeneral } from '../ui/page-general'
import { useFetchProjects } from '@polybank/domains/projects'
import {useEffect} from 'react'

export function PageGeneralFeature () {
  const { data: projects } = useFetchProjects()


  useEffect(() => {
    console.log(projects)
  }, [projects]);
  return (
    <div>
      { projects && (
        <PageGeneral
          projects={projects}
        />
      )}

    </div>
  )
}
