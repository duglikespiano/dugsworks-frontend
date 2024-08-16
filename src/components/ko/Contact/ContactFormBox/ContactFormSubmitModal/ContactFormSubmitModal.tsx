import { useEffect } from 'react';
import { BiMessageCheck, BiMessageError } from 'react-icons/bi';
import styles from './ContactFormSubmitModal.module.scss';

interface props {
	isFormSubmittedHandler: (boolean: boolean) => void;
	isProcessdProperly: boolean;
}

export default function ContactFormSubmitModalKo({ isFormSubmittedHandler, isProcessdProperly }: props) {
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
					isFormSubmittedHandler(false);
				}
			}}
		>
			<div className={styles['contact-form-submit-modal-content-box']}>
				<div className={styles['contact-form-submit-modal-checkicon-box']}>
					{isProcessdProperly && <BiMessageCheck className={styles['contact-form-submit-modal-checkicon']} />}
					{!isProcessdProperly && <BiMessageError className={styles['contact-form-submit-modal-checkicon']} />}
				</div>
				<div className={styles['contact-form-submit-modal-resulttext']}>
					{isProcessdProperly && '정상적으로'}
					{!isProcessdProperly && '오류가 발생했습니다'}
					<br />
					{isProcessdProperly && '발신되었습니다'}
					{!isProcessdProperly && 'Dug에게 연락해주세요'}
					<br />
				</div>
				<div className={styles['contact-form-submit-modal-confirm-icon-box']}>
					<button
						className={styles['contact-form-submit-modal-confirm-icon']}
						onClick={() => {
							isFormSubmittedHandler(false);
						}}
					>
						확인
					</button>
				</div>
			</div>
		</div>
	);
}
