import { PropsWithChildren, useEffect } from "react"
import LayoutPage from "../ui/layout-page"
import { useDispatch } from "react-redux"
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppDispatch } from '@polybank/state/store'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { fetchUser } from '@polybank/domains/users'
import {fetchProjects} from "@polybank/domains/projects";
import {useFetchNews} from "@polybank/domains/news";

export function Layout({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  const { data } = useFetchNews({
    actif: true
  })

  useEffect(() => {
    dispatch(fetchUser())

    dispatch(fetchProjects())
  }, [dispatch])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <LayoutPage>
      { children }
    </LayoutPage>
  )
}
