import { ButtonIconActionElement, ButtonIconActionElementProps } from "./button-icon-action-element"

export interface ButtonIconActionProps {
	actions?: ButtonIconActionElementProps[]
	className?: string
}

export function ButtonIconAction ({ actions, className }: ButtonIconActionProps) {
	return (
		<div>
			{ actions && 
				actions.map((action, index) => (action.menus || action.onClick) && <ButtonIconActionElement key={index} {...action} />)
			}
		</div>
	)
}
