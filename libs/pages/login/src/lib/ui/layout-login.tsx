import { PropsWithChildren } from "react";

export default function LayoutLogin ({ children }: PropsWithChildren) {
  return (
    <main className="h-screen overflow-hidden bg-grey-500">
      <div className="">{ children }</div>
    </main>
  )
}
