import { Fragment } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import './Error.scss';

export default function Error() {
	return (
		<Fragment>
			<div id="error-page">
				<div className="error-page-icon-box">
					<FaRegFaceSurprise className="error-page-icon" />
				</div>
				<div className="error-page-text-oops">Oops!</div>
				<div className="error-page-text">It seems like somethin's wrong!</div>
				<div className="error-page-text">Please contact to Dug!</div>
			</div>
		</Fragment>
	);
}
