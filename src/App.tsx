import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootAll from './RootAll';

import RootEn from './components/en/RootEn';
import HomeEn from './components/en/HomeEn/HomeEn';
import AboutEn from './components/en/AboutEn/AboutEn';

import RootKo from './components/ko/RootKo';
import HomeKo from './components/ko/HomeKo/HomeKo';
import AboutKo from './components/ko/AboutKo/AboutKo';

import RootJa from './components/ja/RootJa';
import HomeJa from './components/ja/HomeJa/HomeJa';
import AboutJa from './components/ja/AboutJa/AboutJa';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootAll />,
	},
	{
		path: '/en',
		element: <RootEn />,
		children: [
			{ path: '', element: <HomeEn /> },
			{ path: 'about', element: <AboutEn /> },
		],
	},
	{
		path: '/ko',
		element: <RootKo />,
		children: [
			{ path: '', element: <HomeKo /> },
			{ path: 'about', element: <AboutKo /> },
		],
	},
	{
		path: '/ja',
		element: <RootJa />,
		children: [
			{ path: '', element: <HomeJa /> },
			{ path: 'about', element: <AboutJa /> },
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
