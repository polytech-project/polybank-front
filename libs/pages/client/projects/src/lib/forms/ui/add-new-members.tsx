import {Avatar, InputSearch, SlideUpMenu} from '@polybank/ui'
import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {UserEntity} from '@polybank/interfaces'
import {Controller, useFormContext} from 'react-hook-form'

export interface AddNewMembersProps {
  isOpen: boolean
  onClose: () => void
  users?: UserEntity[]
  setIds: Dispatch<SetStateAction<string[]>>
  ids: string[]
}
export function AddNewMembers({ isOpen, onClose, users, setIds, ids }: AddNewMembersProps) {
  const { control } = useFormContext()

  return (
    <SlideUpMenu isOpen={isOpen} onClose={onClose}>
      <div className="text-white h-[400px] p-2 py-6">
        <h3 className="text-xl text-gray-100 font-semibold">Add New Members</h3>

        <div className="mt-4">
          <Controller
            name='search'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputSearch
                placeholder="Recherchez par nom d'utilisateur"
                onChange={field.onChange}
              />
            )}
          />


          { users ? (
            <div className="flex flex-col gap-2 divide-y divide-grey-400 pt-4">
              {users.map((user) => (
                <User user={user} key={user.id} ids={ids} setIds={setIds} />
              ))}
            </div>
          ) : (
            <div>Users not loaded</div>
          )}
        </div>
      </div>
    </SlideUpMenu>
  )
}

interface UserProps {
  user: UserEntity,
  ids: string[],
  setIds: Dispatch<SetStateAction<string[]>>
}
function User ({ user, ids, setIds }: UserProps) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (ids.includes(user.id)) {
      setChecked(true)
    }
  }, [ids])

  function handleClick() {
    setChecked(!checked)

  }

  useEffect(() => {
    if (checked) {
      setIds((oldValue) => [...oldValue.filter((i) => i !== user.id), user.id])
    } else {
      setIds((oldValue) => [...oldValue.filter((i) => i !== user.id)])
    }
  }, [checked])

  return (
    <div key={user.id} className="flex items-center gap-5 py-2">
      <div>
        <input
          onClick={handleClick}
          id="comments"
          checked={checked}
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="flex items-center gap-2">
        <Avatar username={user.username} url={user.avatar_url} />
        <div className="flex flex-col">
          <span className="text-sm text-gray-200">{ user.email}</span>
          <span className="text-xs text-grey-200">{ user.username}</span>
        </div>
      </div>

    </div>
  )
}
