import {FormProvider, useForm} from "react-hook-form";
import {AddExpense} from "../ui/add-expense";
import {useEffect, useState} from "react";
import {ProjectEntity} from "@polybank/interfaces";

export interface AddExpenseFeatureProps {
  onClose: () => void
  open: boolean
  project: ProjectEntity
}

export function AddExpenseFeature({ onClose, open, project }: AddExpenseFeatureProps) {
  const [disabled, setDisabled] = useState<boolean>(true)
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: 0,
      title: "Restaurant"
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      if (data.amount && data.amount > 0 && data.title) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    })

    return () => subscribe.unsubscribe()
  }, [methods])

  return (
    <FormProvider {...methods}>
      <AddExpense
        isModalOpen={open}
        onSubmit={onSubmit}
        closeModal={onClose}
        disabled={disabled}
        users={project.users}
      />
    </FormProvider>
  )
}
