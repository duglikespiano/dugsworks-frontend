import '../../../../../scss/Contact/ContactFormBox/ContactFormContentsRequireComponent/ContactFormContentsRequireComponent.scss';

export default function ContactFormContentsRequireComponent(props: { isDarkmode: boolean }) {
	return (
		<div id="contact-form-contents-require-text" className={props.isDarkmode ? 'dark' : ''}>
			内容をご記入ください
		</div>
	);
}
