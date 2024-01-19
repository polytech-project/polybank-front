import {ProjectEntity} from "@polybank/interfaces";
import {Table, TableFilterProps, TableHeadProps} from "@polybank/ui";
import {TableRowProjects} from "./table-row-projects";
import {useEffect, useState} from "react";

export interface PageGeneralProps {
  projects: ProjectEntity[]
  isLoading?: boolean
}

export default function PageGeneral ({ projects, isLoading }: PageGeneralProps) {
  const [data, setData] = useState<ProjectEntity[]>([])
  const [filter, setFilter] = useState<TableFilterProps[]>([])
  const [loading, setLoading] = useState(isLoading)

  const tableHead: TableHeadProps<ProjectEntity>[] = [
    {
      title: 'Nom',
      className: 'px-4 ',
      sort: {
        key: 'title'
      }
    },
    {
      title: 'Nombre de transactions',
      className: '',
    },
    {
      title: 'Nombre de participants',
      className: ''
    }
  ]

  useEffect(() => {
    setData(projects)
    setLoading(isLoading)
  }, [projects, isLoading])

  const columnWidth = '30% 25% 40%'
  return (
    <>
      { projects.length ? (
        <Table
          dataHead={tableHead}
          data={projects}
          setFilter={setFilter}
          filter={filter}
          setDataSort={setData}
          className="mt-2 bg-white rounded-sm flex-grow overflow-y-auto min-h-0"
          columnsWidth={columnWidth}
          defaultSortingKey="title"
        >
          <>
            {data.map((project) => (
              <TableRowProjects
                data={project}
                filter={filter}
                dataHead={tableHead}
                link={`/projects/${project.id}`}
                columnsWidth={columnWidth}
                isLoading={loading}
              />
            ))}
          </>
        </Table>
      ) : (
        <div>
          Pas de données
        </div>
      )}


    </>
  )
}
