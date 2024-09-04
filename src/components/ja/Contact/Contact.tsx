import { useContext, Fragment } from 'react';
import ContactFormBox from './ContactFormBox/ContactFormBox';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';
import '../../../scss/Contact/Contact.scss';

export default function Contact() {
	const { isDarkmode } = useContext(DarkmodeContext);

	return (
		<Fragment>
			<div id="contact-box" className={isDarkmode ? 'dark' : ''}>
				<div className="contact-box-title">問い合わせ</div>
				<ContactFormBox isDarkmode={isDarkmode} />
			</div>
		</Fragment>
	);
}
