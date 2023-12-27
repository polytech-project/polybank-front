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
            <div className="flex flex-col gap-12">
              <div className="flex flex-col text-center">
                <span className="text-lg font-semibold">Créer ton premier projet</span>
                <span className="text-gray-500">azdada</span>
              </div>

              <div className="mx-auto">
                <Button
                  onClick={() => setOpen(true)}
                >
                  Créer ton projet
                </Button>
              </div>

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
