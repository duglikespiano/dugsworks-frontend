import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RootAll() {
	const navigate = useNavigate();
	useEffect(() => {
		const userLanguage = navigator.language.toLowerCase();
		if (userLanguage === 'ko-kr') {
			navigate('/ko');
		} else if (userLanguage === 'ja-jp') {
			navigate('/ja');
		} else {
			navigate('/en');
		}
	}, [navigate]);

	return <Fragment></Fragment>;
}
