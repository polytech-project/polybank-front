import {Button, InputText} from '@polybank/ui'
import {Controller, useFormContext} from 'react-hook-form'

export interface LoginProps {
  disabled: boolean
  onSubmit: () => void
}
export default function Login ({ disabled, onSubmit }: LoginProps) {
  const { control } = useFormContext()

  return (
    <div className="flex items-center px-10 lg:p-20 flex-1 h-[calc(100vh_-_80px)] justify-center lg:justify-start">
      <div className="flex flex-col">
        <img src="/logo.png" className="w-10" alt=""/>
        <span className="text-2xl font-medium mt-4 text-white">Heureux de vous revoir sur Polybank !</span>

        <div className="flex flex-col gap-6 mt-8">

          <div className="flex flex-col gap-3">
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Veuillez entrer une valeur'
              }}
              render={({ field, fieldState: { error } }) => (
                <InputText
                  label={"Email"}
                  name={field.name}
                  onChange={field.onChange}
                  value={field.value}
                  error={error?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Veuillez entrer une valeur"
              }}
              render={({ field, fieldState: { error } }) => (
                <InputText
                  label={"Mot de passe"}
                  type='password'
                  name={field.name}
                  onChange={field.onChange}
                  value={field.value}
                  error={error?.message}
                />
              )}
            />



            <div className="flex flex-col justify-end w-full gap-2">
              <div className="text-right underline text-xs text-grey-300">
                Mot de passe oublié
              </div>
              <div className="flex justify-end">
                <Button
                  disabled={disabled}
                  onClick={onSubmit}
                >
                  Se connecter
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-5 border-t border-grey-400 pt-6">
            <a
              href={`${import.meta.env.VITE_API}/authentication/github/redirect`}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-indigo-500 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-thin leading-6">
                Se connecter avec github
              </span>
            </a>
            <a
              href={`${import.meta.env.VITE_API}/authentication/google/redirect`}
              className="flex items-center justify-center gap-3 rounded-md bg-indigo-500 w-full py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <img className="h-4 w-4" aria-hidden="true" src="/google_logo.svg"  alt=""/>
              <span className="text-xs font-thin leading-6">
                Se connecter avec google
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
