import {Controller, useFormContext} from 'react-hook-form'
import {Avatar, Button, ButtonStyle, InputSelect, InputSelectSmall, InputText, SlideUpMenu} from '@polybank/ui'
import {UserEntity} from '@polybank/interfaces'
import {Dispatch, SetStateAction} from 'react'
import {projects} from "@polybank/domains/projects";

export interface AddExpenseProps {
  isModalOpen: boolean
  closeModal: () => void
  disabled: boolean
  onSubmit: () => void
  users: UserEntity[]
  amountPerUser?: string
  usersIds: string[]
  setUsersIds: Dispatch<SetStateAction<string[]>>
  handleCheckboxChange: (userId: string) => void
}

export function AddExpense ({
  isModalOpen, closeModal, disabled, onSubmit, users,
  usersIds, setUsersIds,
  handleCheckboxChange, amountPerUser
}: AddExpenseProps) {
  const { control } = useFormContext()

  return (
    <SlideUpMenu isOpen={isModalOpen} onClose={closeModal}>
      <div className="pb-8 pt-4 flex flex-col gap-4">
        <span className="font-bold text-md">Ajouter une dépense</span>

        <div className="flex flex-col gap-2">
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Please enter a title"
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                label="Nom de la dépense"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />

          <Controller
            name="amount"
            control={control}
            rules={{
              required: "Please enter a value"
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                type='number'
                label="Montant"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />
          <Controller
            name="paid_by"
            control={control}
            rules={{
              required: 'Please select a cloud provider.',
            }}
            render={({ field, fieldState: { error } }) => (
              <InputSelect
                label="Payé par"
                className="mb-3"
                placeholder="Choississez l'utilisateur"
                options={users.map((user) => {
                  return {
                    label: user.username,
                    value: user.id,
                    icon: <Avatar username={user.username} url={user.avatar_url} />
                  }
                })}
                onChange={(value) => {
                  field.onChange(value)
                }}
                value={field.value}
                error={error?.message}
              />
            )}
          />



          <div>
            <div className="flex justify-end">
              <div className="flex items-center bg-grey-600 rounded-xl border border-grey-400 w-5/12 p-1  sm:px-0 text-center">
                <div className="w-full rounded-lg py-1 text-xs font-medium leading-5 bg-white text-grey-800">
                  Equal
                </div>
                <div className="w-full rounded-lg py-1 text-xs font-medium leading-5 text-gray-600">
                  Manual
                </div>
              </div>
            </div>

            <div className="border rounded-md border-grey-400 p-3 flex flex-col mt-3 divide-y divide-grey-400">
              {users.map((user) => (
                <User
                  user={user} key={user.id}
                  amount={amountPerUser} usersIds={usersIds}
                  handleClick={handleCheckboxChange}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={onSubmit}
            style={ButtonStyle.DARK}
            disabled={disabled}
            className="w-full"
          >
            Créer une dépense
          </Button>
        </div>
      </div>
    </SlideUpMenu>
  )
}

interface UserProps {
  user: UserEntity
  amount?: string
  handleClick: (userId: string) => void
  usersIds: string[]
}
function User ({ user, amount, handleClick, usersIds }: UserProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <input
          id="comments"
          onClick={() => handleClick(user.id)}
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />

        <div className="flex items-center gap-2">
          <Avatar rounded="rounded-md" username={user.username} url={user.avatar_url} />
          <span className="text-sm text-gray-300">{ user.username}</span>
        </div>
      </div>

      <div>
        { usersIds.includes(user.id) ? (
          <div>{amount}€</div>
        ) : (
          <div>0€</div>
        )}
      </div>
    </div>
  )
}
