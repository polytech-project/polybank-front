import { PropsWithChildren } from "react";

export default function LayoutLogin ({ children }: PropsWithChildren) {
  return (
    <main className="h-screen overflow-hidden bg-white">
      <div className="">{ children }</div>
    </main>
  )
}