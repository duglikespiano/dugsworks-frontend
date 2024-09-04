import { createSlice, configureStore, current } from '@reduxjs/toolkit';

export interface projectsKeywordsPropsType {
	type: string;
	payload: number;
}

export interface projectsListType {
	projectInfo: {
		title: string;
		descriptionEn: string;
		descriptionKo: string;
		descriptionJa: string;
		deploymentURL: string;
		frontendRepositoryURL: string;
		backendRepositoryURL: string;
		period: string[];
		skills: string[];
	};
	isDarkmode: boolean;
}

export interface projectInfoType {
	title: string;
	descriptionEn: string;
	descriptionKo: string;
	descriptionJa: string;
	deploymentURL: string;
	frontendRepositoryURL: string;
	backendRepositoryURL: string;
	period: string[];
	skills: string[];
}

export interface projectsKeywordsType {
	keyword: string;
	selected: boolean;
}

const projectsKeywordsSlice = createSlice({
	name: 'projectskeywords',
	initialState: [
		{ keyword: 'HTML/CSS', selected: false },
		{ keyword: 'Javascript', selected: false },
		{ keyword: 'Typescript', selected: false },
		{ keyword: 'React', selected: false },
		{ keyword: 'Redux', selected: false },
		{ keyword: 'Vue', selected: false },
		{ keyword: 'Sass', selected: false },
		{ keyword: 'Node.js', selected: false },
		{ keyword: 'Express', selected: false },
		{ keyword: 'Python', selected: false },
		{ keyword: 'MySQL', selected: false },
		{ keyword: 'MongoDB', selected: false },
		{ keyword: 'Socket.io', selected: false },
		{ keyword: 'AWS', selected: false },
		{ keyword: 'Netlify', selected: false },
		{ keyword: 'PaaS', selected: false },
		{ keyword: 'Deployment', selected: false },
		{ keyword: 'Git', selected: false },
		{ keyword: 'Linux', selected: false },
		{ keyword: 'Vitest', selected: false },
		{ keyword: 'TeamProject', selected: false },
	],
	reducers: {
		statusToggle(state, { payload }: projectsKeywordsPropsType) {
			state[payload].selected = !state[payload].selected;
		},
	},
});

const projectsListSlice = createSlice({
	name: 'projectslist',
	initialState: [
		{
			title: "Dug's notes - Node.js",
			descriptionEn: 'Mastering backend knowledge through Node.js',
			descriptionKo: 'Node.js를 통한 백엔드 관련 지식 습득',
			descriptionJa: 'Node.jsを通じたバックエンド関連知識の習得',
			deploymentURL: '',
			frontendRepositoryURL: '',
			backendRepositoryURL: 'https://github.com/duglikespiano/dugsnotes-node.js',
			period: ['2023-11-01', ''],
			skills: ['Javascript', 'Node.js', 'MySQL', 'MongoDB', 'Socket.io', 'Git'],
		},
		{
			title: '50Projects In 50Days(HTML,CSS,Javascript)',
			descriptionEn: 'Coding challenges for 50 days with HTML,CSS,Javascript',
			descriptionKo: 'HTML,CSS,Javascript를 통한 50일간의 Coding challenge',
			descriptionJa: 'HTML、CSS、Javascriptを通じた50日間のCoding challenge',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/50projectsin50days-html-css-javascript',
			backendRepositoryURL: '',
			period: ['2023-10-31', ''],
			skills: ['HTML/CSS', 'Javascript', 'Git'],
		},
		{
			title: "Dug's Works",
			descriptionEn: "A website to introduce Dug's works and contact with Dug",
			descriptionKo: 'Dug의 작품 소개를 위한 웹 사이트',
			descriptionJa: 'Dugの作品紹介の為のウェブサイト',
			deploymentURL: 'https://dugsworks.netlify.app',
			frontendRepositoryURL: 'https://github.com/duglikespiano/dugsworks-frontend',
			backendRepositoryURL: 'https://github.com/duglikespiano/dugsworks-backend',
			period: ['2023-09-30', ''],
			skills: [
				'HTML/CSS',
				'Typescript',
				'React',
				'Redux',
				'Sass',
				'Node.js',
				'Express',
				'MySQL',
				'AWS',
				'Netlify',
				'PaaS',
				'Deployment',
				'Linux',
				'Git',
			],
		},
		{
			title: '100Day of Code(Python)',
			descriptionEn: 'Coding challenges for 100 days with Python',
			descriptionKo: 'Python을 통한 100일간의 Coding challenge',
			descriptionJa: 'Pythonを通じた100日間のCoding challenge',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/100daysofcode-python',
			backendRepositoryURL: 'https://github.com/duglikespiano/100daysofcode-python',
			period: ['2023-08-25', '2023-11-03'],
			skills: ['Python', 'Git'],
		},
		{
			title: "Dug's notes - Algorithms and Data Structure",
			descriptionEn: 'Mastering Algorithms and Data Structure with Javascript',
			descriptionKo: 'Javascript를 통한 알고리즘 및 자료구조 관련 지식 습득',
			descriptionJa: 'Javascriptを通じたアルゴリズム及び資料構造関連知識習得',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/dugsnotes-algorithms-datastructures-javascript',
			backendRepositoryURL: 'https://github.com/duglikespiano/dugsnotes-algorithms-datastructures-javascript',
			period: ['2023-09-12', '2023-09-15'],
			skills: ['Javascript', 'Git'],
		},
		{
			title: "Dug's notes - UnitTesting",
			descriptionEn: 'Writing test codes with vitest(Typescript, Javascript)',
			descriptionKo: 'Vitest(Typescript, Javascript)를 통한 test code 작성연습',
			descriptionJa: 'Vitest(Typescript, Javascript)を通じたtest codeの作成練習',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/dugesnotes-unittesting-typescript',
			backendRepositoryURL: 'https://github.com/duglikespiano/dugesnotes-unittesting-typescript',
			period: ['2023-08-26', '2023-09-15'],
			skills: ['Typescript', 'Javascript', 'Vitest', 'Git'],
		},
		{
			title: 'Social Login Collector',
			descriptionEn: "A website to practice big platforms' social logins API",
			descriptionKo: '대형 플랫폼들의 Social login API를 다루는 웹 사이트',
			descriptionJa: '大きなプラットフォームのSocial login APIのhandlingを練習',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/sociallogincollector-frontend',
			backendRepositoryURL: 'https://github.com/duglikespiano/sociallogincollector-backend',
			period: ['2023-06-09', '2023-06-23'],
			skills: ['HTML/CSS', 'Typescript', 'React', 'Node.js', 'Express', 'Git'],
		},
		{
			title: 'Chat with Dug',
			descriptionEn: 'A website to have a chat with friends with Socket.io',
			descriptionKo: '친구들과 사용하기 위해 만든 Socket.io를 활용한 채팅 사이트',
			descriptionJa: '友達を使用する為のSocket.ioを活用したチャットサイト',
			deploymentURL: 'https://chatwithdug.netlify.app',
			frontendRepositoryURL: 'https://github.com/duglikespiano/chatwithdug-frontend',
			backendRepositoryURL: 'https://github.com/duglikespiano/chatwithdug-backend',
			period: ['2023-03-01', '2023-04-27'],
			skills: [
				'HTML/CSS',
				'Javascript',
				'React',
				'Socket.io',
				'Node.js',
				'Express',
				'MySQL',
				'AWS',
				'Netlify',
				'PaaS',
				'Deployment',
				'Linux',
				'Git',
			],
		},
		{
			title: 'Drag&Drop',
			descriptionEn: "A component to practice DOM's Drag&Drop with Vue",
			descriptionKo: 'Vue를 사용하여 DOM의 Drag&Drop을 구현한 컴포넌트',
			descriptionJa: 'Vueを使用してDOMのDrag&Dropを具現したコンポーネント',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/draganddrop-frontend',
			backendRepositoryURL: 'https://github.com/duglikespiano/draganddrop-backend',
			period: ['2023-02-20', '2023-03-03'],
			skills: ['HTML/CSS', 'Javascript', 'Vue', 'Node.js', 'Express', 'MySQL', 'Git'],
		},
		{
			title: 'TodoList',
			descriptionEn: 'A Todo list component with basic React',
			descriptionKo: 'React의 기초적인 문법을 활용하여 구현한 Todo list 컴포넌트',
			descriptionJa: 'Reactの基礎文法を活用して具現したコンポーネント',
			deploymentURL: '',
			frontendRepositoryURL: 'https://github.com/duglikespiano/todolist-frontend',
			backendRepositoryURL: 'https://github.com/duglikespiano/todolist-backend',
			period: ['2023-01-09', '2023-01-15'],
			skills: ['HTML/CSS', 'Javascript', 'Node.js', 'Express', 'MySQL', 'Git'],
		},
		{
			title: 'Jegabox',
			descriptionEn: 'A Clone site of Megabox(Korean movie theater)',
			descriptionKo: '메가박스 웹 사이트의 클론사이트',
			descriptionJa: '韓国の映画館、MEGABOXウェブサイトのクロンサイト',
			deploymentURL: '',
			frontendRepositoryURL: '',
			backendRepositoryURL: 'https://github.com/duglikespiano/justcode-7-2nd-jegabox-back',
			period: ['2022.11.14', '2022.11.25'],
			skills: ['Node.js', 'Javascript', 'Express', 'MySQL', 'TeamProject', 'Git'],
		},
		{
			title: 'Photofolio',
			descriptionEn: "A Clone site of Grafolio(Korean creators' playground)",
			descriptionKo: '그라폴리오 웹 사이트의 클론사이트',
			descriptionJa: '韓国のクリエイター向けのサイト、Grafolioのクロンサイト',
			deploymentURL: '',
			frontendRepositoryURL: '',
			backendRepositoryURL: 'https://github.com/duglikespiano/justcode-7-1st-photofolio-renewal-back',
			period: ['2022-10-31', '2022-11-11'],
			skills: ['Node.js', 'Javascript', 'Express', 'MySQL', 'TeamProject', 'Git'],
		},
	],
	reducers: {},
});

const stringArrayType: string[] = [];

const selectedProjectKeywordsSlice = createSlice({
	name: 'selectedprojectkeywords',
	initialState: stringArrayType,
	reducers: {
		checkToggle(state, { payload }) {
			if (!current(state).includes(payload)) {
				return [...state, payload];
			} else {
				const newArray = current(state).slice();
				newArray.splice(current(state).indexOf(payload), 1);
				return newArray;
			}
		},
	},
});

const selectedProjectsSliceInitialstate: {
	selectedKeywords: string[];
	selectedKeywordsIncludeProjects: projectInfoType[];
} = {
	selectedKeywords: [],
	selectedKeywordsIncludeProjects: [],
};
const selectedProjectKeywordsIncludeProjectsSlice = createSlice({
	name: 'selectedprojectkeywordsincludeprojects',
	initialState: selectedProjectsSliceInitialstate,
	reducers: {
		filterProjectsBySkills(state, { payload }) {
			if (!current(state).selectedKeywords.includes(payload.projectsKeywords)) {
				const selectedKeywords = [...current(state).selectedKeywords, payload.projectsKeywords];
				const selectedKeywordsIncludeProjects: projectInfoType[] | any = [];
				selectedKeywords.forEach((keyword) => {
					payload.projectsList.forEach((project: projectInfoType) => {
						if (project.skills.includes(keyword) && !selectedKeywordsIncludeProjects.includes(project)) {
							selectedKeywordsIncludeProjects.push(project);
						}
					});
				});
				selectedKeywordsIncludeProjects.sort(function (a: projectInfoType, b: projectInfoType) {
					if (a.period[0] < b.period[0]) return 1;
					if (a.period[0] === b.period[0]) return 0;
					if (a.period[0] > b.period[0]) return -1;
					return selectedKeywordsIncludeProjects;
				});
				return { selectedKeywords, selectedKeywordsIncludeProjects };
			} else {
				const selectedKeywords = current(state).selectedKeywords.slice();
				const selectedKeywordsIncludeProjects: projectInfoType[] | any = [];
				selectedKeywords.splice(selectedKeywords.indexOf(payload.projectsKeywords), 1);
				selectedKeywords.forEach((keyword) => {
					payload.projectsList.forEach((project: projectInfoType) => {
						if (project.skills.includes(keyword) && !selectedKeywordsIncludeProjects.includes(project)) {
							selectedKeywordsIncludeProjects.push(project);
						}
					});
				});
				selectedKeywordsIncludeProjects.sort(function (a: projectInfoType, b: projectInfoType): projectInfoType[] | number {
					if (a.period[0] < b.period[0]) return 1;
					if (a.period[0] === b.period[0]) return 0;
					if (a.period[0] > b.period[0]) return -1;
					return selectedKeywordsIncludeProjects;
				});
				return { selectedKeywords, selectedKeywordsIncludeProjects };
			}
		},
	},
});

export interface messagesSliceType {
	id: number;
	name: string;
	password: string;
	message: string;
	created_at: string | number;
}

export type fetchedMessagesType = {
	id?: number;
	name: string;
	password: string;
	message: string;
	created_at: Date | string;
};

export interface messagesSlicePropsType {
	id: number;
	name: string;
	password: string;
	message: string;
	created_at: string | number;
}

type messegeSliceInitialStateType = messagesSliceType[];

const messageSliceInitialState: messegeSliceInitialStateType = [];

const messagesSlice = createSlice({
	name: 'messages',
	initialState: messageSliceInitialState,
	reducers: {
		resetMessages(state) {
			state.splice(0);
		},
		addMessage(state, { payload }) {
			if (typeof payload === 'string') {
				state.unshift(JSON.parse(payload));
			} else {
				state.unshift(payload);
			}
		},
		deleteMessage(state, { payload }) {
			return state.filter((item) => item.id !== payload);
		},
	},
});

const store = configureStore({
	reducer: {
		projectsKeywords: projectsKeywordsSlice.reducer,
		projectsList: projectsListSlice.reducer,
		selectedProjectKeywords: selectedProjectKeywordsSlice.reducer,
		selectedProjectKeywordsIncludeProjects: selectedProjectKeywordsIncludeProjectsSlice.reducer,
		messagesList: messagesSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export const projectsKeywordsActions = projectsKeywordsSlice.actions;
export const projectsListActions = projectsListSlice.actions;
export const selectedProjectKeywordsActions = selectedProjectKeywordsSlice.actions;
export const selectedProjectKeywordsIncludeProjectsActions = selectedProjectKeywordsIncludeProjectsSlice.actions;
export const messagesActions = messagesSlice.actions;
export default store;
