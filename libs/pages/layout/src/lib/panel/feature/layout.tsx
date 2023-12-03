import { fetchUser } from "@polybank/domains/users";
import { AppDispatch } from "@polybank/state/store";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayoutPanelPage } from "../ui/layout-page";

export function LayoutPanel ({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser()).unwrap()
  }, [dispatch])

  return (
    <LayoutPanelPage>
      { children }
    </LayoutPanelPage>
  )
}