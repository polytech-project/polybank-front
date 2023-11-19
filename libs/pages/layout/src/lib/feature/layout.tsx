import { PropsWithChildren, useEffect } from "react"
import LayoutPage from "../ui/layout-page"
import { useDispatch } from "react-redux"
import { AppDispatch } from '@polybank/state/store'
import { fetchUser } from '@polybank/domains/users'

export function Layout({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser())
    .unwrap()
    .then((data) => {
      console.log(data);
    })
  }, [dispatch])
  return (
    <LayoutPage>
      { children }
    </LayoutPage>
  )
}