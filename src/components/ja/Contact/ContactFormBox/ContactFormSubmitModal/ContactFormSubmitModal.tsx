import { useEffect } from 'react';
import { BiMessageCheck, BiMessageError } from 'react-icons/bi';
import '../../../../../scss/Contact/ContactFormBox/ContactFormSubmitModal/ContactFormSubmitModal.scss';

interface props {
	isFormSubmittedHandler: (boolean: boolean) => void;
	isProcessdProperly: boolean;
}

export default function ContactFormSubmitModal({ isFormSubmittedHandler, isProcessdProperly }: props) {
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
					{isProcessdProperly && '正常に'}
					{!isProcessdProperly && 'エラーが発生しました'}
					<br />
					{isProcessdProperly && '発信されました'}
					{!isProcessdProperly && 'Dugにご連絡ください'}
				</div>
				<div className="contact-form-submit-modal-confirm-icon-box">
					<button
						className="contact-form-submit-modal-confirm-icon"
						onClick={() => {
							isFormSubmittedHandler(false);
						}}
					>
						確認
					</button>
				</div>
			</div>
		</div>
	);
}
