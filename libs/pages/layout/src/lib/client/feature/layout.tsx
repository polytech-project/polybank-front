import { PropsWithChildren, useEffect } from "react"
import LayoutPage from "../ui/layout-page"
import { useDispatch } from "react-redux"
import { AppDispatch } from '@polybank/state/store'
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
