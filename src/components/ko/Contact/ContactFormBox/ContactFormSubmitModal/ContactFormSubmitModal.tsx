import { useEffect } from 'react';
import { BiMessageCheck, BiMessageError } from 'react-icons/bi';
import '../../../../../scss/Contact/ContactFormBox/ContactFormSubmitModal/ContactFormSubmitModal.scss';

interface props {
	isFormSubmittedHandler: (boolean: boolean) => void;
	isProcessdProperly: boolean;
	isDarkmode: boolean;
}

export default function ContactFormSubmitModal({ isFormSubmittedHandler, isProcessdProperly, isDarkmode }: props) {
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
			id="contact-form-submit-modal"
			className={isDarkmode ? 'dark' : ''}
			onClick={(event) => {
				event.stopPropagation();
				if (event.target === event.currentTarget) {
					isFormSubmittedHandler(false);
				}
			}}
		>
			<div className="contact-form-submit-modal-content-box">
				<div className="contact-form-submit-modal-checkicon-box">
					{isProcessdProperly && <BiMessageCheck className="contact-form-submit-modal-checkicon" />}
					{!isProcessdProperly && <BiMessageError className="contact-form-submit-modal-checkicon" />}
				</div>
				<div className="contact-form-submit-modal-resulttext">
					{isProcessdProperly && '정상적으로'}
					{!isProcessdProperly && '오류가 발생했습니다'}
					<br />
					{isProcessdProperly && '발신되었습니다'}
					{!isProcessdProperly && 'Dug에게 연락해주세요'}
					<br />
				</div>
				<div className="contact-form-submit-modal-confirm-icon-box">
					<button
						className="contact-form-submit-modal-confirm-icon"
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
