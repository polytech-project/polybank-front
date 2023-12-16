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
              href="http://localhost:3333/authentication/github/redirect"
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
              href={`http://localhost:3333/authentication/google/redirect`}
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
  /*return (
    <>
    {/!*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    *!/}
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Connectez-vous à votre compte
            </h2>

          </div>

          <div className="mt-10">

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="text-sm font-semibold leading-6">Twitter</span>
              </a>

              <a
                href={`http://localhost:3333/authentication/google/redirect`}
                className="flex items-center justify-center gap-3 rounded-lg bg-[#7ECA9C] w-[345px] h-[54px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <img className="h-5 w-5" aria-hidden="true" src="google_logo.svg" />
                <span className="text-base font-semibold leading-6">
                  Démarrer avec Google
                </span>
              </a>

              <a
                href="http://localhost:3333/authentication/github/redirect"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  </>
  )*/
}
