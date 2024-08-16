import { Fragment } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import styles from './Error.module.scss';

export default function ErrorEn() {
	return (
		<Fragment>
			<div className={styles['error-page']}>
				<div className={styles['error-page-icon-box']}>
					<FaRegFaceSurprise className={styles['error-page-icon']} />
				</div>
				<div className={styles['error-page-text-oops']}>Oops!</div>
				<div className={styles['error-page-text']}>It seems like somethin's wrong!</div>
				<div className={styles['error-page-text']}>Please contact to Dug!</div>
			</div>
		</Fragment>
	);
}
