import {Button, ButtonStyle, InputText, InputTextArea, SlideUpMenu} from "@polybank/ui";
import { Controller, useFormContext } from "react-hook-form";

export interface CreateProjectModalProps {
  isModalOpen: boolean
  closeModal: () => void
  onSubmit: () => void
  disabled: boolean
}

export function CreateProjectModal ({ isModalOpen, closeModal, onSubmit, disabled }: CreateProjectModalProps) {
  const { control, setValue } = useFormContext()
  return (
    <SlideUpMenu
      onClose={closeModal}
      isOpen={isModalOpen}
    >
      <div className="py-8 flex flex-col gap-4">
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

        <div className="pt-4">
          <Button
            onClick={() => closeModal()}
            style={ButtonStyle.DARK}
            disabled={disabled}
            className="w-full"
          >
            Créer un projet
          </Button>
        </div>
      </div>

    </SlideUpMenu>
  )
}
