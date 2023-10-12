import { useEffect } from 'react';
import { PiCheckFatBold } from 'react-icons/pi';
import styles from './ContactFormSubmitModalEn.module.scss';

interface props {
	isFormSubmittedHandler: (boolean: boolean) => void;
}

export default function ContactFormSubmitModalEn({ isFormSubmittedHandler }: props) {
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
					<PiCheckFatBold className={styles['contact-form-submit-modal-checkicon']} />
				</div>
				<div className={styles['contact-form-submit-modal-resulttext']}>
					Your message
					<br />
					has been delivered
				</div>
				<div className={styles['contact-form-submit-modal-confirm-icon-box']}>
					<button
						className={styles['contact-form-submit-modal-confirm-icon']}
						onClick={() => {
							isFormSubmittedHandler(false);
						}}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
