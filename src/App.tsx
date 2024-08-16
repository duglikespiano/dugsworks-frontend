import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './sliceStore';

import RootAll from './components/roots/RootAll';
import RootError from './components/roots/RootError';

import RootEn from './components/en/Root';
import ErrorEn from './components/en/Error/Error';
import HomeEn from './components/en/Home/Home';
import AboutEn from './components/en/About/About';
import ProjectsEn from './components/en/Projects/Projects';
import ContactEn from './components/en/Contact/Contact';
import GuestbookEn from './components/en/Guestbook/Guestbook';

import RootKo from './components/ko/Root';
import ErrorKo from './components/ko/Error/Error';
import HomeKo from './components/ko/Home/Home';
import AboutKo from './components/ko/About/AboutKo';
import ProjectsKo from './components/ko/Projects/Projects';
import ContactKo from './components/ko/Contact/Contact';
import GuestbookKo from './components/ko/Guestbook/Guestbook';

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
