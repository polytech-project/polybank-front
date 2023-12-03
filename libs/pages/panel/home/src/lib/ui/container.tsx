import { PropsWithChildren } from "react";

export default function Container ({ children }: PropsWithChildren) {
  return (
    <>
      <div></div>
      <div className="flex-col flex h-full">
        { children }
      </div>
    </>
  )
}