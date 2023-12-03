import {useNavigate} from "react-router"
import { useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppDispatch } from '@polybank/state/store'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { fetchUser, getUserState } from "@polybank/domains/users"
import { useEffect } from "react"

export function useRedirectIfLogged (path: string | undefined = '/home') {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const user = useSelector(getUserState)

  useEffect(() => {
    dispatch(fetchUser())
    .unwrap()

  }, [dispatch])

  useEffect(() => {
    console.log('user', user);

    if (user.isAuthenticated) {
      navigate(path)
    }
  }, [user])
}
