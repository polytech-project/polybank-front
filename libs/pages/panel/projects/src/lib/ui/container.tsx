import { PropsWithChildren } from "react";
import { Header } from '@polybank/ui'
import { IconEnum } from "@polybank/enums";
export function Container({ children }: PropsWithChildren) {
  return (
    <>
      <Header title="Projets" icon={IconEnum.ENVIRONMENT} />
      <div className="flex-grow flex-col flex">{ children }</div>
    </>
  )

}