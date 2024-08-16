import { useEffect } from 'react';
import { BiMessageError } from 'react-icons/bi';
import './GuestbookInputFormModal.scss';

interface props {
	isFormFilledProperlyHandler: () => void;
}

export default function GuestbookInputFormModal({ isFormFilledProperlyHandler }: props) {
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
					isFormFilledProperlyHandler();
				}
			}}
		>
			<div className="contact-form-submit-modal-content-box">
				<div className="contact-form-submit-modal-checkicon-box">
					<BiMessageError className="contact-form-submit-modal-checkicon" />
				</div>
				<div className="contact-form-submit-modal-resulttext">
					All of elements
					<br />
					must be filled properly
				</div>
				<div className="contact-form-submit-modal-confirm-icon-box">
					<button
						className="contact-form-submit-modal-confirm-icon"
						onClick={() => {
							isFormFilledProperlyHandler();
						}}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
