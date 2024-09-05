import { Link, useLocation } from 'react-router-dom';
import { menus } from '../../../../../../variables/variables';
import '../../../../../../scss/common/Header/NavModal/NavInModal/NavInModal.scss';

export default function NavInModal(props: { hamburgerHandler: () => void; navModalHandler: () => void }) {
	const location = useLocation();

	return (
		<ul id="nav-in-modal-links">
			{menus.ja.map((item, i) => (
				<li className="nav-in-modal-link" key={i}>
					<h2 className="category">
						<Link
							className={location.pathname.split('/')[2] === item.url ? 'link active' : 'link'}
							to={item.url}
							onClick={() => {
								props.hamburgerHandler();
								props.navModalHandler();
							}}
						>
							{item.title}
						</Link>
					</h2>
				</li>
			))}
		</ul>
	);
}
