import { Fragment } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import styles from './ErrorJa.module.scss';

export default function ErrorJa() {
	return (
		<Fragment>
			<div className={styles['error-page']}>
				<div className={styles['error-page-icon-box']}>
					<FaRegFaceSurprise className={styles['error-page-icon']} />
				</div>
				<div className={styles['error-page-text-oops']}>おおっと!</div>
				<div className={styles['error-page-text']}>何か問題が発生したそうです!</div>
				<div className={styles['error-page-text']}>Dugにご連絡ください!</div>
			</div>
		</Fragment>
	);
}
