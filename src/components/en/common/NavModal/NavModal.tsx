import { useEffect, Fragment } from 'react';
import '../../../../scss/common/NavModal/NavModal.scss';

export default function NavModal(props: { isOpen: boolean }) {
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
		<Fragment>
			<div id="nav-modal"></div>
		</Fragment>
	);
}
