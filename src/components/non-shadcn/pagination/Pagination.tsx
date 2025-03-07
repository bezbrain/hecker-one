import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import styles from './pagination.module.scss'

interface PaginationInterface extends ReactPaginateProps {
	// eslint-disable-next-line no-unused-vars
	handlePageChange?: (selected: number) => void
}

export const Pagination = ({
	pageCount = 0,
	handlePageChange,
	forcePage,
	...rest
}: PaginationInterface) => {
	return (
		<div className='flex justify-end'>
			<ReactPaginate
				{...rest}
				pageCount={pageCount}
				containerClassName={styles.container}
				activeClassName={styles.activeClassName}
				pageClassName={styles.pageClassName}
				previousClassName={styles.previousClassName}
				disabledClassName={styles.disabledClassName}
				nextClassName={styles.nextClassName}
				onPageChange={(item) => handlePageChange?.(item?.selected + 1)}
				previousLabel={<HiChevronLeft className='h-5' />}
				nextLabel={<HiChevronRight className='h-5' />}
				forcePage={forcePage && forcePage - 1}
			/>
		</div>
	)
}
