import {ProjectEntity} from "@polybank/interfaces";
import {PROJECT_OVERVIEW_URL, PROJECT_STATS_URL, PROJECTS_GENERAL_URL} from "@polybank/routes";
import {HeaderProject} from "../components/header_project";
import {useState} from "react";

export interface PageProjectStatsProps {
  project: ProjectEntity
}

const tabs = [
  { name: 'Dépenses', href: (id: string): string => PROJECT_OVERVIEW_URL(id) + PROJECTS_GENERAL_URL, current: false },
  { name: 'Statistiques', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_STATS_URL, current: true },
]
export function PageProjectStats ({ project }: PageProjectStatsProps) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <HeaderProject project={project} setIsOpen={() => setOpen(true)} tabs={tabs} />
      <div className="px-3">
        <div>
          Statistiques
        </div>
      </div>
    </>
  )
}
