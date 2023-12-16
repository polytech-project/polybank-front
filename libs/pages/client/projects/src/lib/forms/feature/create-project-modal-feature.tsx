import { FormProvider, useForm } from "react-hook-form";
import { CreateProjectModal } from "../ui/create-project-modal";
import {useEffect, useState} from "react";
import {useCreateProject} from "@polybank/domains/projects";

export interface CreateProjectModalFeatureProps {
  onClose: () => void
  open: boolean
}

export function CreateProjectModalFeature ({ onClose, open }: CreateProjectModalFeatureProps) {
  const [disabled, setDisabled] = useState<boolean>(true)
  const { mutate: createProject} = useCreateProject()
  const [ids, setIds] = useState<string[]>([])

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    createProject({
      ...data,
      title: data.name,
      users: ids
    })
    onClose()
  })

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      console.log(data)
      if (data.name) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    })

    return () => subscribe.unsubscribe()
  }, [methods]);


  return (
    <FormProvider {...methods}>
      <CreateProjectModal
        closeModal={onClose}
        isModalOpen={open}
        onSubmit={onSubmit}
        disabled={disabled}
        ids={ids}
        setIds={setIds}
      />
    </FormProvider>
  )
}
