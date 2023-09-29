import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootAll from './RootAll';

import RootEn from './components/en/RootEn';
import HomeEn from './components/en/HomeEn/HomeEn';

import RootKo from './components/ko/RootKo';
import HomeKo from './components/ko/HomeKo/HomeKo';

import RootJa from './components/ja/RootJa';
import HomeJa from './components/ja/HomeJa/HomeJa';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootAll />,
	},
	{ path: '/en', element: <RootEn />, children: [{ path: '', element: <HomeEn /> }] },
	{ path: '/ko', element: <RootKo />, children: [{ path: '', element: <HomeKo /> }] },
	{ path: '/ja', element: <RootJa />, children: [{ path: '', element: <HomeJa /> }] },
]);

export default function App() {
	return <RouterProvider router={router} />;
}
