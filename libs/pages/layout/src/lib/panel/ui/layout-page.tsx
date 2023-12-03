import { useLocation, useNavigate } from "react-router"
import { Navigation } from "./navigation"
import { classNames } from "@polybank/utils"
import { TopBar } from "./top-bar"
import { PropsWithChildren } from "react"

export interface LayoutPanelPageProps {
  topBar?: boolean
}

export function LayoutPanelPage ({ topBar = true, children }: PropsWithChildren<LayoutPanelPageProps>) {
  return (
    <main className='dark:bg-neutral-900 dark:h-full bg-neutral-200'>
    <div className="flex">
      <div className="h-full sticky top-0 z-30">
        <Navigation />
      </div>

      <div className='w-full'>
        { topBar && <TopBar />}
        <div className={classNames(
          'relative flex flex-col pt-2 px-2 dark:pt-0 dark:px-0 min-h-page-container'
        )}>
          { children }
        </div>
      </div>
    </div>
  </main>
  )
}