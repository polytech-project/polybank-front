import { Button, ButtonStyle, InputSelectSmall, InputText, InputTextArea, SlideUpMenu } from "@polybank/ui";
import Project from "../components/project";
import { useState } from "react";
import { CreateProjectModalFeature } from "../forms/feature/create-project-modal-feature";
import {ProjectEntity} from "@polybank/interfaces";

export interface PageGeneralProps {
    projects: ProjectEntity[]
}
export function PageGeneral ({ projects }: PageGeneralProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="px-3">
        <div className="pt-4">
          {projects.length > 0 ? (
            <div className="flex flex-col gap-2 overflow-y-scroll pb-[200px]">
              {projects.map((project) => (
                <Project project={project} key={project.id} />
              ))}
            </div>

          ): (
            <div>
              Pas de projets
            </div>
          )}
        </div>


      <div className="absolute bottom-20 w-full left-0 px-4">
        <Button
          onClick={() => setOpen(true)}
          style={ButtonStyle.DARK}
          className="w-full lg:w-10"
        >
          Créer un projet
        </Button>
      </div>
      <CreateProjectModalFeature open={open} onClose={() => setOpen(false)}/>
    </div>
  )
}
