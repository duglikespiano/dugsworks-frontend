import { Fragment } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import '../../../scss/Error/Error.scss';

export default function Error() {
	return (
		<Fragment>
			<div id="error-page">
				<div className="error-page-icon-box">
					<FaRegFaceSurprise className="error-page-icon" />
				</div>
				<div className="error-page-text-oops">おおっと!</div>
				<div className="error-page-text">何か問題が発生したそうです!</div>
				<div className="error-page-text">Dugにご連絡ください!</div>
			</div>
		</Fragment>
	);
}
