import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './sliceStore';

import RootAll from './RootAll';

import RootEn from './components/en/RootEn';
import HomeEn from './components/en/HomeEn/HomeEn';
import AboutEn from './components/en/AboutEn/AboutEn';
import ProjectsEn from './components/en/ProjectsEn/ProjectsEn';
import ContactEn from './components/en/ContactEn/ContactEn';

import RootKo from './components/ko/RootKo';
import HomeKo from './components/ko/HomeKo/HomeKo';
import AboutKo from './components/ko/AboutKo/AboutKo';
import ProjectsKo from './components/ko/ProjectsKo/ProjectsKo';
import ContactKo from './components/ko/ContactKo/ContactKo';

import RootJa from './components/ja/RootJa';
import HomeJa from './components/ja/HomeJa/HomeJa';
import AboutJa from './components/ja/AboutJa/AboutJa';
import ProjectsJa from './components/ja/ProjectsJa/ProjectsJa';
import ContactJa from './components/ja/ContactJa/ContactJa';

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
			{ path: 'projects', element: <ProjectsEn /> },
			{ path: 'contact', element: <ContactEn /> },
		],
	},
	{
		path: '/ko',
		element: <RootKo />,
		children: [
			{ path: '', element: <HomeKo /> },
			{ path: 'about', element: <AboutKo /> },
			{ path: 'projects', element: <ProjectsKo /> },
			{ path: 'contact', element: <ContactKo /> },
		],
	},
	{
		path: '/ja',
		element: <RootJa />,
		children: [
			{ path: '', element: <HomeJa /> },
			{ path: 'about', element: <AboutJa /> },
			{ path: 'projects', element: <ProjectsJa /> },
			{ path: 'contact', element: <ContactJa /> },
		],
	},
]);

export default function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}
