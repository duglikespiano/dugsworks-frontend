import { createSlice, configureStore } from '@reduxjs/toolkit';

interface type {
	type: string;
	payload: number;
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState: [
		{ name: 'HTML/CSS', selected: false },
		{ name: 'Javascript/Typescript', selected: false },
		{ name: 'React', selected: false },
		{ name: 'Redux', selected: false },
		{ name: 'Vue', selected: false },
		{ name: 'Sass', selected: false },
		{ name: 'Node.js', selected: false },
		{ name: 'Express', selected: false },
		{ name: 'Python', selected: false },
		{ name: 'MySQL', selected: false },
		{ name: 'Socket.io', selected: false },
		{ name: 'AWS', selected: false },
		{ name: 'Netlify', selected: false },
		{ name: 'CloudType', selected: false },
		{ name: 'Deployment', selected: false },
		{ name: 'Git', selected: false },
		{ name: 'Linux', selected: false },
		{ name: 'Vitest', selected: false },
	],
	reducers: {
		statusToggle(state, { payload }: type) {
			state[payload].selected = !state[payload].selected;
		},
	},
});

const store = configureStore({
	reducer: {
		projects: projectsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const projectsActions = projectsSlice.actions;
export default store;
