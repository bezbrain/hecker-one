import classNames from 'classnames'
import { HiOutlineExclamationTriangle } from 'react-icons/hi2'

interface Props {
	message?: string
}

export const EmptyData = ({ message = undefined }: Props) => {
	return (
		<div className='flex flex-col justify-center items-center h-[20rem] md:h-[25rem] bg-white gap-y-3'>
			<HiOutlineExclamationTriangle
				className={classNames('w-16 h-16 bg-white', {
					'text-eke-red-300': message,
					'text-black': !message
				})}
				aria-hidden='true'
			/>
			<p className='text-13px font-medium text-center'>
				{message || 'No data available'}
			</p>
		</div>
	)
}
