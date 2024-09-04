import { useEffect, Fragment } from 'react';
import { BiHourglass } from 'react-icons/bi';
import '../../../../scss/common/ProcessingModal/ProcessingModal.scss';

export default function ProcessingModal(props: { isDarkmode: boolean }) {
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
			<div id="processing-modal-background" className={props.isDarkmode ? 'dark' : ''}>
				<div className="processing-modal-content-box">
					<div className="processing-modal-hourglassicon-box">
						<BiHourglass className="processing-modal-hourglassicon" />
					</div>
					<div className="processing-modal-text">進行中</div>
				</div>
			</div>
		</Fragment>
	);
}
