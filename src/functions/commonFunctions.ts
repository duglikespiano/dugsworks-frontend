export const setLocalStorageDarkmode = () => {
	if (localStorage.getItem('dugsworks-darkmode')) {
		if (localStorage.getItem('dugsworks-darkmode') === 'true') {
			return 'dark';
		} else if (localStorage.getItem('dugsworks-darkmode') === 'false') {
			return 'light';
		}
	} else if (!localStorage.getItem('dugsworks-darkmode')) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		} else {
			return 'light';
		}
	}
};
