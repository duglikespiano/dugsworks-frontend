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
				<div className="error-page-text-oops">이런!</div>
				<div className="error-page-text">뭔가 문제가 발생한 것 같습니다!</div>
				<div className="error-page-text">Dug에게 연락해주세요!</div>
			</div>
		</Fragment>
	);
}
