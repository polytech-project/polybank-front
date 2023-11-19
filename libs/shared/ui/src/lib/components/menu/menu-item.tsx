import { classNames } from '@polybank/utils'
import { type ClickEvent, MenuItem as Item } from '@szhsin/react-menu'
import { ReactNode } from "react"
import { useNavigate } from 'react-router-dom'
import { Truncate } from '../truncate/truncate'
import { Tooltip } from '../tooltip/tooltip'

export interface MenuItemProps {
	name?: string
	link?: { url: string, external?: boolean }
	contentLeft?: ReactNode
	contentRight?: ReactNode
  onClick?: (e: ClickEvent) => void
  copy?: string
  copyTooltip?: string
  containerClassName?: string
  className?: string
  textClassName?: string
  isActive?: boolean
  truncateLimit?: number
  disabled?: boolean
  itemContentCustom?: ReactNode
  tooltip?: string
}

export function MenuItem (props: MenuItemProps) {
	const {
    name,
    link,
    contentLeft,
    contentRight,
    onClick,
    copy,
    copyTooltip,
    isActive = false,
    textClassName = 'text-neutral-400 dark:text-neutral-100',
    className = '',
    containerClassName = '',
    truncateLimit = 34,
    disabled = false,
    itemContentCustom,
    tooltip,
  } = props

	const navigate = useNavigate()
	const disabledClassName = disabled ? 'opacity-50 cursor-not-allowed' : ''

	const itemContent = itemContentCustom 
		? itemContentCustom
		: 
		<>
			<div className={classNames(
				'flex items-center truncate', className
			)}>

				{/* COPY COMPONENT TOOD */}
				{/* { copy && 
					<div onClick={(e) => e.preventDefault()}>
						
					</div>
				} */}

				{ contentLeft &&
					<span className='mr-3' data-testid="menu-icon">
						{ contentLeft }
					</span>
				}

				{ name &&
					<span className={`menu-item__name text-sm font-medium ${textClassName}`}>
						<Truncate text={name} truncateLimit={truncateLimit} />
					</span>
				}
			</div>

			<div className="flex items-center">{contentRight && <span className="ml-3">{contentRight}</span>}</div>
		</>

	const item = link?.external
		? 
		<Item
			className={classNames(
				'menu-item',
				isActive ? 'menu-item--hover' : '',
				containerClassName
			)}
			href={link.url}
			data-testid="menuItem"
			target="_blank"
			rel="noopener noreferrer"
			onClick={(e: ClickEvent) => {
				e.syntheticEvent.stopPropagation()
				onClick && onClick(e)
			}}
		>
			{itemContent}
		</Item>
		:
		<Item
			className={classNames(
				isActive ? 'menu-item--hover' : '',
				containerClassName, disabledClassName
			)}
			data-testid="menuItem"
			defaultValue="prod"
			onClick={(e: ClickEvent) => {
				e.syntheticEvent.preventDefault()
				if (!disabled) {
					link?.url && navigate(link?.url)
					onClick && onClick(e)
				}
			}}
		>
			{itemContent}
		</Item>

	const result = tooltip ? <Tooltip content={tooltip}>{ item }</Tooltip> : item

	return result
}