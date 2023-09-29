import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootAll from './RootAll';

import RootEn from './en/components/RootEn';
import HomeEn from './en/components/HomeEn';

import RootKo from './ko/components/RootKo';
import HomeKo from './ko/components/HomeKo';

import RootJa from './ja/components/RootJa';
import HomeJa from './ja/components/HomeJa';

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
