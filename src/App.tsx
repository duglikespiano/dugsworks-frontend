import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './sliceStore';

import RootAll from './RootAll';
import RootError from './RootError';

import RootEn from './components/en/RootEn';
import ErrorEn from './components/en/Error/Error';
import HomeEn from './components/en/Home/HomeEn';
import AboutEn from './components/en/About/About';
import ProjectsEn from './components/en/Projects/ProjectsEn';
import ContactEn from './components/en/Contact/Contact';
import GuestbookEn from './components/en/Guestbook/Guestbook';

import RootKo from './components/ko/RootKo';
import ErrorKo from './components/ko/ErrorKo/ErrorKo';
import HomeKo from './components/ko/HomeKo/HomeKo';
import AboutKo from './components/ko/AboutKo/AboutKo';
import ProjectsKo from './components/ko/ProjectsKo/ProjectsKo';
import ContactKo from './components/ko/ContactKo/ContactKo';
import GuestbookKo from './components/ko/GuestbookKo/GuestbookKo';

import RootJa from './components/ja/Root';
import ErrorJa from './components/ja/Error/Error';
import HomeJa from './components/ja/Home/Home';
import AboutJa from './components/ja/About/About';
import ProjectsJa from './components/ja/Projects/Projects';
import ContactJa from './components/ja/Contact/Contact';
import GuestbookJa from './components/ja/Guestbook/Guestbook';

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
