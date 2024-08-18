import { Fragment } from 'react';
import ContactFormBox from './ContactFormBox/ContactFormBox';
import '../../../scss/Contact/Contact.scss';

export default function Contact() {
	return (
		<Fragment>
			<div id="contact-box">
				<div className="contact-box-title">問い合わせ</div>
				<ContactFormBox />
			</div>
		</Fragment>
	);
}
