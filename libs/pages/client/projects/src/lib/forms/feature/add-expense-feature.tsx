import {FormProvider, useForm} from "react-hook-form";
import {AddExpense} from "../ui/add-expense";
import {useEffect, useState} from "react";
import {ProjectEntity} from "@polybank/interfaces";
import {projects, useCreateTransaction} from "@polybank/domains/projects";

export interface AddExpenseFeatureProps {
  onClose: () => void
  open: boolean
  project: ProjectEntity
}

export function AddExpenseFeature({ onClose, open, project }: AddExpenseFeatureProps) {
  const [disabled, setDisabled] = useState<boolean>(true)
  const [usersIds, setUsersIds] = useState<string[]>([])
  const [amountPerUser, setAmountPerUser] = useState<string>()
  const [amount, setAmount] = useState(0)
  const { mutate: createTransaction } = useCreateTransaction()

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: 0,
      title: "Restaurant",
      paid_by: '',
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data, usersIds, typeof data.amount)
    const payload = {
      title: data.title,
      amount: data.amount,
      paid_by: data.paid_by,
      users: usersIds,
      type: 'expense'
    }

    if (usersIds.length === 0) {
      // Créer un toast
    }

    createTransaction({
      projectId: project.id,
      data: payload
    })

    onClose()
  })

  function handleCheckboxChange(userId: string) {
    setUsersIds((prevUsers) => {
      return prevUsers.includes(userId)
        ? prevUsers.filter((id) => id !== userId)
        : [...prevUsers, userId]
      }

    )
  }



  function calculateAmountPerUser (totalAmount: number) {
    const value = totalAmount / usersIds.length;
    setAmountPerUser(value.toFixed(2))
  }

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      if (data.amount && data.amount > 0) {
        setAmount(data.amount)
        if (data.title) {
          setDisabled(false)
        }

      } else {
        setDisabled(true)
      }
    })
    return () => subscribe.unsubscribe()
  }, [methods, usersIds])

  useEffect(() => {
    console.log(usersIds)
    if (usersIds.length === 0) {
      setDisabled(true)
    }
  }, [usersIds])

  useEffect(() => {
    calculateAmountPerUser(amount)
  }, [amount, usersIds]);

  return (
    <FormProvider {...methods}>
      <AddExpense
        isModalOpen={open}
        onSubmit={onSubmit}
        closeModal={onClose}
        disabled={disabled}
        users={project.users}
        usersIds={usersIds}
        amountPerUser={amountPerUser}
        handleCheckboxChange={handleCheckboxChange}
        setUsersIds={setUsersIds}
      />
    </FormProvider>
  )
}
