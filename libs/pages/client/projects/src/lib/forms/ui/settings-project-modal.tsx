import {Button, ButtonStyle, InputSelect, InputSelectSmall, InputText, InputTextArea, SlideUpMenu} from "@polybank/ui";
import {Controller, useFormContext} from "react-hook-form";
import {CloudIcon} from "@heroicons/react/24/outline";

export interface SettingsProjectModalProps {
  isModalOpen: boolean
  closeModal: () => void
}
export function SettingsProjectModal ({ isModalOpen, closeModal }: SettingsProjectModalProps) {
  const { control, setValue } = useFormContext()

  return (
    <SlideUpMenu
      isOpen={isModalOpen} onClose={closeModal}
    >
      <div className="pb-8 pt-4 flex flex-col gap-4">
        <span className="text-center font-bold text-md">Paramètres</span>
        <div>
          <div className="flex flex-col gap-4">
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

            <InputSelectSmall

              label="Catégorie"
              name="category"
              items={[
                {label: "Voyage", value: 'voyage'}
              ]}
            />
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Button
              style={ButtonStyle.DARK}
              className="w-full"
            >
              Archiver ce projet
            </Button>

            <Button
              className="w-full "
              style={ButtonStyle.ERROR}
            >
              Supprimer ce projet
            </Button>
          </div>
        </div>
      </div>

    </SlideUpMenu>
  )
}
