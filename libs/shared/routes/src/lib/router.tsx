import { ReactNode } from "react"

export * from './sub-router/login.router'

export const INDEX_URL = '/'

export interface Route {
  component: ReactNode
  path: string
}