import { useEffect } from 'react';
import { BiMessageError } from 'react-icons/bi';
import styles from './GuestbookInputFormModalKo.module.scss';

interface props {
	isFormFilledProperlyHandler: () => void;
}

export default function GuestbookInputFormModalKo({ isFormFilledProperlyHandler }: props) {
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
		<div
			className={styles['contact-form-submit-modal']}
			onClick={(event) => {
				event.stopPropagation();
				if (event.target === event.currentTarget) {
					isFormFilledProperlyHandler();
				}
			}}
		>
			<div className={styles['contact-form-submit-modal-content-box']}>
				<div className={styles['contact-form-submit-modal-checkicon-box']}>
					<BiMessageError className={styles['contact-form-submit-modal-checkicon']} />
				</div>
				<div className={styles['contact-form-submit-modal-resulttext']}>
					모든 구성요소들이
					<br />
					작성되어야 합니다
				</div>
				<div className={styles['contact-form-submit-modal-confirm-icon-box']}>
					<button
						className={styles['contact-form-submit-modal-confirm-icon']}
						onClick={() => {
							isFormFilledProperlyHandler();
						}}
					>
						확인
					</button>
				</div>
			</div>
		</div>
	);
}
