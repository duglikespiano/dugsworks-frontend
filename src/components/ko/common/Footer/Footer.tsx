import { useContext, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../../../variables/variables';
import { DarkmodeContext } from '../../../../contexts/DarkmodeContext';
import '../../../../scss/common/Footer/Footer.scss';

export default function Footer() {
	const location = useLocation();
	const { isDarkmode } = useContext(DarkmodeContext);

	return (
		<Fragment>
			<ul id="footer-links" className={isDarkmode ? 'dark' : ''}>
				{menus.ko.map((item, i) => (
					<li className="footer-link" key={i}>
						<h2 className="category">
							<Link className={location.pathname.split('/')[2] === item.url ? 'link active' : 'link'} to={item.url}>
								{item.title}
							</Link>
						</h2>
					</li>
				))}
			</ul>
		</Fragment>
	);
}
