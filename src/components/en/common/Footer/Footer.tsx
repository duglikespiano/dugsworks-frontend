import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../../../variables/variables';
import '../../../../scss/common/Footer/Footer.scss';

export default function Footer() {
	const location = useLocation();

	return (
		<Fragment>
			<ul id="footer-links">
				{menus.en.map((item, i) => (
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
