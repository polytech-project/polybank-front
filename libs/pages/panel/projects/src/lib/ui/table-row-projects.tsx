import {ProjectEntity} from "@polybank/interfaces";
import {TableFilterProps, TableHeadProps, TableRow} from "@polybank/ui";

export interface TableRowProjectsProps {
  data: ProjectEntity
  filter: TableFilterProps[]
  dataHead: TableHeadProps<ProjectEntity>[]
  link: string
  columnsWidth?: string
  isLoading?: boolean
}

export function TableRowProjects({ data, filter, dataHead, link, columnsWidth = `repeat(${dataHead.length},minmax(0,1fr))`, isLoading = false }: TableRowProjectsProps) {
  return (
    <TableRow data={data} filter={filter} columnsWidth={columnsWidth} link={link} disabled={isLoading}>
      <>
        <div className="flex items-center px-4">
          <span className="text-sm text-neutral-400 font-medium truncate">{ data.title }</span>
        </div>
        <div>
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{ data.transactions.length } transaction(s)</span>
        </div>
        <div>
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{ data.users.length } utilisateur(s)</span>
        </div>
      </>
    </TableRow>
  )
}
