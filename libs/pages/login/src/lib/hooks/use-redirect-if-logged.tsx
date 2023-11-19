import {useNavigate} from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@polybank/state/store'
import { getUserState } from "@polybank/domains/users"
import { useEffect } from "react"

export function useRedirectIfLogged () {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const user = useSelector(getUserState)

  useEffect(() => {
    console.log('user', user);
    
    if (user.isAuthenticated) {
      navigate('/')
    }
  }, [user])
}