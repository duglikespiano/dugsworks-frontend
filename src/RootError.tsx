import { useEffect, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RootError() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.split('/')[1] === 'ko') {
			navigate('/ko/error');
		} else if (location.pathname.split('/')[1] === 'ja') {
			navigate('/ja/error');
		} else if (location.pathname.split('/')[1] === 'en') {
			navigate('/en/error');
		} else {
			const userLanguage = navigator.language.toLowerCase();
			if (userLanguage === 'ko-kr') {
				navigate('/ko/error');
			} else if (userLanguage === 'ja-jp') {
				navigate('/ja/error');
			} else {
				navigate('/en/error');
			}
		}
	}, [navigate, location.pathname]);

	return <Fragment></Fragment>;
}
