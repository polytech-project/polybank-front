import { classNames } from "@polybank/utils"

export interface LoaderSpinnerProps {
	className?: string
	classWidth?: string
	classBorder?: string
	theme?: 'dark' | 'light'
}

export function LoaderSpinner ({ 
	className = '', 
	classBorder = 'border-2', 
	classWidth = 'w-4', 
	theme = 'light' 
}: LoaderSpinnerProps) {
	const themeClasses = theme === 'dark' ? 'border-neutral-350 border-r-neutral-50' : 'border-r-neutral-500'

	return (
		<div
			data-testid="spinner"
			className={classNames(
				'aspect-square rounded-full animate-spin border-solid', classBorder || 'border-2', themeClasses,
				classWidth || 'w-4', className
			)}
		/>
	)
}