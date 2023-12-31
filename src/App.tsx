import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './sliceStore';

import RootAll from './RootAll';
import RootError from './RootError';

import RootEn from './components/en/RootEn';
import ErrorEn from './components/en/ErrorEn/ErrorEn';
import HomeEn from './components/en/HomeEn/HomeEn';
import AboutEn from './components/en/AboutEn/AboutEn';
import ProjectsEn from './components/en/ProjectsEn/ProjectsEn';
import ContactEn from './components/en/ContactEn/ContactEn';
import GuestbookEn from './components/en/GuestbookEn/GuestbookEn';

import RootKo from './components/ko/RootKo';
import ErrorKo from './components/ko/ErrorKo/ErrorKo';
import HomeKo from './components/ko/HomeKo/HomeKo';
import AboutKo from './components/ko/AboutKo/AboutKo';
import ProjectsKo from './components/ko/ProjectsKo/ProjectsKo';
import ContactKo from './components/ko/ContactKo/ContactKo';
import GuestbookKo from './components/ko/GuestbookKo/GuestbookKo';

import RootJa from './components/ja/RootJa';
import ErrorJa from './components/ja/ErrorJa/ErrorJa';
import HomeJa from './components/ja/HomeJa/HomeJa';
import AboutJa from './components/ja/AboutJa/AboutJa';
import ProjectsJa from './components/ja/ProjectsJa/ProjectsJa';
import ContactJa from './components/ja/ContactJa/ContactJa';
import GuestbookJa from './components/ja/GuestbookJa/GuestbookJa';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootAll />,
		errorElement: <RootError />,
	},
	{
		path: '/en',
		element: <RootEn />,
		children: [
			{ path: '', element: <HomeEn /> },
			{ path: 'error', element: <ErrorEn /> },
			{ path: 'about', element: <AboutEn /> },
			{ path: 'projects', element: <ProjectsEn /> },
			{ path: 'contact', element: <ContactEn /> },
			{ path: 'guestbook', element: <GuestbookEn /> },
		],
	},
	{
		path: '/ko',
		element: <RootKo />,
		children: [
			{ path: '', element: <HomeKo /> },
			{ path: 'error', element: <ErrorKo /> },
			{ path: 'about', element: <AboutKo /> },
			{ path: 'projects', element: <ProjectsKo /> },
			{ path: 'contact', element: <ContactKo /> },
			{ path: 'guestbook', element: <GuestbookKo /> },
		],
	},
	{
		path: '/ja',
		element: <RootJa />,
		children: [
			{ path: '', element: <HomeJa /> },
			{ path: 'error', element: <ErrorJa /> },
			{ path: 'about', element: <AboutJa /> },
			{ path: 'projects', element: <ProjectsJa /> },
			{ path: 'contact', element: <ContactJa /> },
			{ path: 'guestbook', element: <GuestbookJa /> },
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
