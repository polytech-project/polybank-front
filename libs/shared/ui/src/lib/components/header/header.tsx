import { IconEnum } from "@polybank/enums"
import { ReactNode } from "react"
import { Icon } from "../icons/icon"
import { classNames } from "@polybank/utils"
import { Truncate } from "../truncate/truncate"
import {Skeleton} from "../skeleton/skeleton"

export interface HeaderProps {
  title?: string
  icon?: IconEnum | string
  iconClassName?: string
  buttons?: ReactNode
  copyTitle?: boolean
  copyContent?: string
  actions?: ReactNode
}

export function Header ({ title, icon, iconClassName = '', buttons, copyTitle, copyContent, actions }: HeaderProps) {
  return (
    <div className="flex h-32 border-b border-neutral-200 items-center justify-between bg-white rounded-t p-5 shrink-0">
      <div className="flex gap-4 ml-2 items-center">
        { icon && <Icon name={icon} className={classNames('w-16', iconClassName)} />}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center maw-w-3xl">
            <Skeleton height={36} width={150} show={!title}>
              <h1 className="font-bold text-neutral-400 text-3xl max-w-3xl truncate">
                {title && <Truncate text={title} truncateLimit={50} />}
              </h1>
            </Skeleton>
          </div>
          { actions && <div className="flex gap-3 items-start">{actions}</div> }
        </div>
      </div>
      { buttons && <div className="flex self-end gap-2">{buttons}</div> }
    </div>
  )
}