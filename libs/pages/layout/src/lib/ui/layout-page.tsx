import { PropsWithChildren } from "react";

export default function LayoutPage ({ children }: PropsWithChildren) {
  return (
    <main className="h-screen overflow-hidden bg-white">
      <div className="">{ children }</div>
    </main>
  )
}