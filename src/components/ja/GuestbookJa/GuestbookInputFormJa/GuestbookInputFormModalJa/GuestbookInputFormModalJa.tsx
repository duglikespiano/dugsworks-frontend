import { useEffect } from 'react';
import { BiMessageError } from 'react-icons/bi';
import styles from './GuestbookInputFormModalJa.module.scss';

interface props {
	isFormFilledProperlyHandler: () => void;
}

export default function GuestbookInputFormModalJa({ isFormFilledProperlyHandler }: props) {
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
					全ての要素の
					<br />
					作成が必要です
				</div>
				<div className={styles['contact-form-submit-modal-confirm-icon-box']}>
					<button
						className={styles['contact-form-submit-modal-confirm-icon']}
						onClick={() => {
							isFormFilledProperlyHandler();
						}}
					>
						確認
					</button>
				</div>
			</div>
		</div>
	);
}
