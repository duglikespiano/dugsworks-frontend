import { useContext, Fragment } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';
import '../../../scss/Error/Error.scss';

export default function Error() {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<div id="error-page" className={isDarkmode ? 'dark' : ''}>
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
