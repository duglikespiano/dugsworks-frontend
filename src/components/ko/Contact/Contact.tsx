import { Fragment } from 'react';
import ContactFormBox from './ContactFormBox/ContactFormBox';
import '../../../scss/Contact/Contact.scss';

export default function Contact() {
	return (
		<Fragment>
			<div id="contact-box">
				<div className="contact-box-title">문의처</div>
				<ContactFormBox />
			</div>
		</Fragment>
	);
}
