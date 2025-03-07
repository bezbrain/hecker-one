import { useEffect, useRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name?: string
	errorMessage?: string
	label?: string
	indeterminate?: boolean
}

export const Checkbox = ({
	name,
	label,
	errorMessage,
	indeterminate,
	...rest
}: Props) => {
	const ref = useRef<HTMLInputElement>(null!)

	useEffect(() => {
		if (typeof indeterminate === 'boolean') {
			ref.current.indeterminate = !rest.checked && indeterminate
		}
	}, [ref, indeterminate, rest.checked])

	return (
		<>
			<label htmlFor={name} className='material-checkbox'>
				<input type='checkbox' ref={ref} {...rest} />
				<span className='checkmark'></span>
				{label}
			</label>

			{errorMessage && (
				<p className='text-xs text-red-700 py-2'>{errorMessage}</p>
			)}
		</>
	)
}

Checkbox.displayName = 'Checkbox'
