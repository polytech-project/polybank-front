import {Button, ButtonStyle, InputSearch, InputSelect, InputText, InputTextArea, SlideUpMenu} from "@polybank/ui";
import {Controller, useFormContext} from "react-hook-form";
import {UserPlusIcon} from "@heroicons/react/24/outline";
import {Dispatch, SetStateAction, useState} from "react";
import {classNames} from "@polybank/utils";
import {AddNewMembersFeature} from "../feature/add-new-members-feature";

export interface CreateProjectModalProps {
  isModalOpen: boolean
  closeModal: () => void
  onSubmit: () => void
  disabled: boolean
  setIds: Dispatch<SetStateAction<string[]>>
  ids: string[]
}

export function CreateProjectModal ({ isModalOpen, closeModal, onSubmit, disabled, setIds, ids }: CreateProjectModalProps) {
  const { control } = useFormContext()
  const [usersModalOpen, setUsersModalOpen] = useState(false)

  return (
    <div className="relative bg-red-500">
      <SlideUpMenu
        onClose={closeModal}
        isOpen={isModalOpen}
      >
        <AddNewMembersFeature
          onClose={() => setUsersModalOpen(false)}
          open={usersModalOpen}
          ids={ids}
          setIds={setIds}
        />
        <div
          className={classNames('py-8 flex flex-col gap-4 h-[600px]')}
        >

          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Please enter a value'
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                label="Nom du projet"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                error={error?.message}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputTextArea
                label="Description du projet"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}

          />

          <div>
          <span className="flex items-center gap-4 text-indigo-500 text-sm" onClick={() => setUsersModalOpen(true)}>
            <UserPlusIcon className='w-5' />
            <span>Add new members</span>
          </span>


          </div>

          <div className="pt-4">
            <Button
              onClick={onSubmit}
              style={ButtonStyle.DARK}
              disabled={disabled}
              className="w-full"
            >
              Créer un projet
            </Button>
          </div>
        </div>

      </SlideUpMenu>
    </div>

  )
}
