import { useRedirectIfLogged } from '../hooks/use-redirect-if-logged'
import LayoutLogin from '../ui/layout-login'
import Login from '../ui/login'
import { useForm, FormProvider } from 'react-hook-form'
import { useEffect, useState } from 'react'
import {useMutation} from "react-query";
import {apiClient} from "@polybank/api-client";
import {useNavigate} from "react-router";

export function PageLoginFeature () {
  const [disabled, setDisabled] = useState<boolean>(true)
  const navigate = useNavigate()
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  useRedirectIfLogged('/home')

  const login = useMutation(async (data: { email: string, password: string }) => {
    const response = await apiClient.post('/authentication/login')
      .payload({
        email: data.email,
        password: data.password
      }).build()

    return response.data
  }, {
    onSuccess: () => {
      navigate("/")
    }
  })

  const submit = methods.handleSubmit((data) => {
    console.log("LOGIN")
    console.log(data)
    login.mutate(data)
  })

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      console.log(data)
      if (data.email && data.password) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    })

    return () => subscribe.unsubscribe()
  }, [methods.watch])

  return (
   <FormProvider {...methods}>
     <LayoutLogin>
       <Login
         disabled={disabled}
         onSubmit={submit}
       />
     </LayoutLogin>
   </FormProvider>
  )
}
