import { ReactNode } from "react"

export interface Router {
  uid: string
  href: string
  component: ReactNode
}