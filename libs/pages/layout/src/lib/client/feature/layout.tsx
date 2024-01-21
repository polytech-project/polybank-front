import { PropsWithChildren, useEffect } from "react"
import LayoutPage from "../ui/layout-page"
import { useDispatch } from "react-redux"
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppDispatch } from '@polybank/state/store'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { fetchUser } from '@polybank/domains/users'
import {fetchProjects} from "@polybank/domains/projects";


export function Layout({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser())

    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <LayoutPage>
      { children }
    </LayoutPage>
  )
}
