import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RootAll() {
	const navigate = useNavigate();
	useEffect(() => {
		const userLanguage = navigator.language.toLowerCase();

		if (userLanguage === 'ko-kr') {
			navigate('/ko');
		} else if (userLanguage === 'ja-jp') {
			navigate('/ko');
		} else {
			navigate('/en');
		}
	}, [navigate]);

	return <Fragment>main-rootpage</Fragment>;
}
