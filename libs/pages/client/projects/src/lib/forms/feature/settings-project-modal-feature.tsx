import {SettingsProjectModal} from "../ui/settings-project-modal";
import {FormProvider, useForm} from "react-hook-form";

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
  return (
    <FormProvider {...methods} >
      <SettingsProjectModal
        isModalOpen={open}
        closeModal={onClose}
      />

    </FormProvider>

  )
}
