import {SettingsProjectModal} from "../ui/settings-project-modal";
import {FormProvider, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {getProjectState, selectProject} from "@polybank/domains/projects";
import {useEffect} from "react";

export interface SettingsProjectModalFeatureProps {
  onClose: () => void
  open: boolean
}
export function SettingsProjectModalFeature ({ onClose, open }: SettingsProjectModalFeatureProps) {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const project = useSelector(selectProject)

  useEffect(() => {
    if (!project) return
    methods.setValue('name', project.title)
    methods.setValue('description', project.description)
  }, [project])

  return (
    <>
      { project && (
        <FormProvider {...methods} >
          <SettingsProjectModal
            project={project}
            isModalOpen={open}
            closeModal={onClose}
          />

        </FormProvider>
      )}
    </>


  )
}
