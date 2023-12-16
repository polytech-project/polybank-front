import { classNames } from '@polybank/utils'
import { type ReactElement, useRef, useState } from 'react'
import { Icon } from '../icons/icon'
import { IconAwesomeEnum } from '@polybank/enums'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export interface InputSearchProps {
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
  isEmpty?: boolean
  emptyContent?: ReactElement
  autofocus?: boolean
  customSize?: string
}

export function InputSearch (props: InputSearchProps) {
	const {
    placeholder = '',
    className = '',
    onChange,
    isEmpty = false,
    emptyContent,
    customSize = 'h-9 text-xs',
    autofocus = false,
  } = props

	const ref = useRef<HTMLInputElement>(null)
	const [toggleDelete, setToggleDelete] = useState(false)

	const getValue = (value: string) => {
		if (onChange) onChange(value)
		if (value !== '') {
			setToggleDelete(true)
		} else {
			setToggleDelete(false)
		}
	}

	const deleteValue = () => {
		setToggleDelete(false)
		if (ref.current) ref.current.value = ''
		if (onChange) onChange('')
	}

	return (
		<>
			<div className={classNames('relative w-full ', className)}>

				<MagnifyingGlassIcon className='w-4 absolute text-white left-2 top-1/2 -translate-y-1/2' />

				<input
					data-testid="input-search"
          ref={ref}
          autoFocus={autofocus}
					className={classNames(
						'w-full rounded border border-grey-400 dark:border-neutral-400 bg-grey-600 dark:bg-neutral-700 text-gray-100 dark:text-neutral-350 placeholder:text-neutral-350 pl-8 pr-6 leading-none focus:outline-none focus:border-brand-400 focus:transition-[border-color]',
						customSize
					)}
					type='text'
					placeholder={placeholder}
          disabled={false}
          onChange={(e) => getValue(e.currentTarget.value)}
          name="search"
				/>

				{ toggleDelete &&
					<button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={deleteValue}>
						<XMarkIcon className="text-neutral-350 w-5" />
					</button>
				}
			</div>

			{ isEmpty &&
				<div>
					{ emptyContent
						? emptyContent
						:
						<div className="text-center px-3 py-6">
							<Icon name={IconAwesomeEnum.WAVE_PULSE} className="text-neutral-350" />
							<p className="text-neutral-350 font-medium text-xs mt-1">No result for this search</p>
						</div>
					}
				</div>
			}
		</>
	)
}
