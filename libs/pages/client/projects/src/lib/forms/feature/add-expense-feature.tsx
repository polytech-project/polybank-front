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
  const [usersIds, setUsersIds] = useState<string[]>([])
  const [amountPerUser, setAmountPerUser] = useState<string>()
  const [amount, setAmount] = useState(0)

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
  }, [methods])

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
