import {ProjectEntity} from "@polybank/interfaces";

export interface PageGeneralProps {
  projects: ProjectEntity[]
}

export default function PageGeneral ({ projects }: PageGeneralProps) {
  return (
    <div className="bg-white p-5 rounded-md">
      Page de projets, il y a actuellement {projects.length} projets
    </div>
  )
}
