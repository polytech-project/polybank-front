import { Button, ButtonStyle, InputSelectSmall, InputText, InputTextArea, SlideUpMenu } from "@polybank/ui";
import Project from "../components/project";
import { useState } from "react";
import { CreateProjectModalFeature } from "../forms/feature/create-project-modal-feature";

export function PageGeneral () {
  const [open, setOpen] = useState(false)
  return (
    <div className="px-3">

      <Project />

      <div className="absolute bottom-20 w-full left-0 px-4">
        <Button
          onClick={() => setOpen(true)}
          style={ButtonStyle.DARK}
          className="w-full"
        >
          Créer un projet
        </Button>
      </div>
      <CreateProjectModalFeature open={open} onClose={() => setOpen(false)}/>
      {/*<SlideUpMenu
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <div>
          <div className="py-8 flex flex-col gap-4">
            <InputText
              label="Nom du projet"
              name="name"
            />

            <InputTextArea
              label="Description"
              name="description"
            />

            <InputSelectSmall
              label="Devise"
              name="currency"
              items={[
                { label: 'Euro', value: 'euro' },
                { label: 'Dollar', value: 'dollar' },
                { label: 'Yen', value: 'yen' },
              ]}
            />

            <div className="pt-4">
              <Button
                onClick={() => setOpen(false)}
                style={ButtonStyle.DARK}
                className="w-full"
              >
                Créer un projet
              </Button>
            </div>
          </div>
        </div>
      </SlideUpMenu>*/}
    </div>
  )
}
