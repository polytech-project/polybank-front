export interface ButtonIconActionElementProps {
	triggerTooltip?: string
	iconLeft?: ReactNode
	iconRight?: ReactNode
	onClick?: () => void
	menus?: MenuData
	menusClassName?: string
	menuAlign?: MenuAlign
	triggerClassName?: string
}