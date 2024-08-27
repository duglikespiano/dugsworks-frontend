import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../../../../variables/variables';
import '../../../../../scss/common/Header/Nav/Nav.scss';

export default function Nav(props: { isDarkmode: boolean }) {
	const location = useLocation();

	return (
		<Fragment>
			<ul id="nav-links" className={props.isDarkmode ? 'dark' : ''}>
				{menus.en.map((item, i) => (
					<li className="nav-link" key={i}>
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
