import { FormProvider, useForm } from "react-hook-form";
import { CreateProjectModal } from "../ui/create-project-modal";
import {useState} from "react";

export interface CreateProjectModalFeatureProps {
  onClose: () => void
  open: boolean
}

export function CreateProjectModalFeature ({ onClose, open }: CreateProjectModalFeatureProps) {
  const [disabled, setDisabled] = useState<boolean>(true)

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  })
  return (
    <FormProvider {...methods}>
      <CreateProjectModal
        closeModal={onClose}
        isModalOpen={open}
        onSubmit={onSubmit}
        disabled={disabled}
      />
    </FormProvider>
  )
}
