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
				<div className="error-page-text-oops">이런!</div>
				<div className="error-page-text">문제가 발생한 것 같습니다!</div>
				<div className="error-page-text">Dug에게 연락해주세요!</div>
			</div>
		</Fragment>
	);
}
