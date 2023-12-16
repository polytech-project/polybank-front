import { PageGeneral } from '../ui/page-general'
import { useFetchProjects } from '@polybank/domains/projects'

export function PageGeneralFeature () {
  const { data: projects } = useFetchProjects()

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
