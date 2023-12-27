import { PropsWithChildren } from "react";

export function Container ({ children }: PropsWithChildren) {
  return (
    <>

      <div className="flex-col flex h-full">
        { children }
      </div>
    </>
  )
}

