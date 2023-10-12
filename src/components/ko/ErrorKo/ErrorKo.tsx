import { Fragment } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import styles from './ErrorKo.module.scss';

export default function ErrorKo() {
	return (
		<Fragment>
			<div className={styles['error-page']}>
				<div className={styles['error-page-icon-box']}>
					<FaRegFaceSurprise className={styles['error-page-icon']} />
				</div>
				<div className={styles['error-page-text-oops']}>이런!</div>
				<div className={styles['error-page-text']}>뭔가 문제가 발생한 것 같습니다!</div>
				<div className={styles['error-page-text']}>Dug에게 연락해주세요!</div>
			</div>
		</Fragment>
	);
}
