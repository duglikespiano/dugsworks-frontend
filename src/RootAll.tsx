import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RootAll() {
	const navigate = useNavigate();
	useEffect(() => {
		const userLanguage = navigator.language.toLowerCase();
		if (userLanguage.includes('ko')) {
			navigate('/ko');
		} else if (userLanguage.includes('ja')) {
			navigate('/ja');
		} else {
			navigate('/en');
		}
	}, [navigate]);

	return <Fragment></Fragment>;
}
