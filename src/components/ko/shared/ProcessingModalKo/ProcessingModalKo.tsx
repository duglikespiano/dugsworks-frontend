import { useEffect, Fragment } from 'react';
import { BiHourglass } from 'react-icons/bi';
import styles from './ProcessingModalKo.module.scss';

export default function ProcessingModalKo() {
	useEffect(() => {
		document.body.style.cssText = `
			position: fixed; 
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return (
		<Fragment>
			<div className={styles['processing-modal-background']}>
				<div className={styles['processing-modal-content-box']}>
					<div className={styles['processing-modal-hourglassicon-box']}>
						<BiHourglass className={styles['processing-modal-hourglassicon']} />
					</div>
					<div className={styles['processing-modal-text']}>진행중</div>
				</div>
			</div>
		</Fragment>
	);
}
