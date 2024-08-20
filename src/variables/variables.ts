import { HistoryType } from './types';

export const menus = {
	en: [
		{ title: 'About', url: 'about' },
		{ title: 'Projects', url: 'projects' },
		{ title: 'Contact', url: 'contact' },
		{ title: 'Guestbook', url: 'guestbook' },
	],
	ko: [
		{ title: '소개', url: 'about' },
		{ title: '프로젝트', url: 'projects' },
		{ title: '문의처', url: 'contact' },
		{ title: '방명록', url: 'guestbook' },
	],
	ja: [
		{ title: '紹介', url: 'about' },
		{ title: 'プロジェクト', url: 'projects' },
		{ title: '問い合わせ', url: 'contact' },
		{ title: '芳名録', url: 'guestbook' },
	],
};
export const languages = [
	{ language: 'Eng', to: '/en' },
	{ language: '한글', to: '/ko' },
	{ language: '日本語', to: '/ja' },
];

export const afterHistory: HistoryType[] = [
	{
		period: 'Jan 2023 - Present',
		name: 'Self Taught',
		department: 'Frontend & Backend',
		duty1: 'Studying web development by Udemy lectures and other articles',
		duty2: 'Trying to wide view about web development by studying Frontend and Backend',
		duty3: 'Practicing to learn a variety of languages and skills quick',
	},
	{
		period: '2023. 01 - 현재',
		name: '독학',
		department: '프론트엔드 & 백엔드',
		duty1: 'Udemy 및 기타 자료를 통해 웹 개발을 공부하고 있습니다',
		duty2: '프론트엔드, 백엔드 지식을 모두 공부하여 웹 개발에 대해 넓은 시야를 가지려 노력합니다',
		duty3: '다양한 언어, 기술에 대해 빠르게 익히는 연습을 합니다',
	},
	{
		period: '2023. 01 - 現在',
		name: '独学',
		department: 'フロントエンド & バックエンド',
		duty1: 'Udemy及び他の資料を通じてウェブ開発を勉強しています',
		duty2: 'フルスタックを目指してウェブ開発について幅広い視野を持つ為にします',
		duty3: '色んな言語、技術を手早く習う練習をします',
	},
];

export const bootCampHistory: HistoryType[] = [
	{
		period: 'Oct 2022 - Dec 2022',
		name: 'Justcode',
		department: 'Backend course',
		duty1: 'Completed online bootcamp Justcode Backend course',
		duty2: 'Learnt HTML, CSS, Javascript Node.js, Express, AWS, Git etc',
		duty3: 'Experienced team project twice through Agile Methodology',
	},
	{
		period: '2022. 10 - 2022. 12',
		name: '저스트코드',
		department: '백엔드과정',
		duty1: '온라인 부트캠프 저스트코드에서 백엔드과정을 수료하였습니다',
		duty2: 'HTML, CSS, Javascript, Node.js, Express, AWS, Git 등의 개념을 배웠습니다',
		duty3: '에자일방법론을 통한 팀 단위 개발을 두 차례 경험하였습니다',
	},
	{
		period: '2022. 10 - 2022. 12',
		name: 'ジャストコード',
		department: 'バックエンド過程',
		duty1: 'オンラインブートキャンプジャストコードのバックエンド過程を修了しました',
		duty2: 'HTML、CSS、Javascript、Node.js、Express、AWS、Gitの概念を習いました',
		duty3: 'アジャイル手法を通じたチーム単位開発を2回経験しました',
	},
];

export const secondCompanyHistory: HistoryType[] = [
	{
		period: 'Dec 2020 - Jun 2022',
		name: 'ULVAC KOREA, Ltd.',
		department: 'Purchasing Department',
		duty1: 'Worked at a semiconductor manufacturing machine company',
		duty2: "Managed mechanical parts' delivery, quaility and cooperate companies",
		duty3: 'Managed communication to Japanese headquater',
	},
	{
		period: '2020. 12 - 2022. 06',
		name: '한국알박(주)',
		department: '구매파트',
		duty1: '일본계 반도체공정장비제조기업 구매부서에서 근무하였습니다',
		duty2: '기계품목들의 납기관리, 품질관리, 협력업체를 담당하였습니다',
		duty3: '일본 본사와의 커뮤니케이션을 담당하였습니다',
	},
	{
		period: '2020. 12 - 2022. 06',
		name: '韓国アルバック(株)',
		department: '購買パート',
		duty1: '日本系半導体工程装備製造企業の購買府署で勤務しました',
		duty2: '機械品目たちの納期管理、品質管理、協力企業を担当しました',
		duty3: '日本本社とのコミュニケーションを担当しました',
	},
];

export const firstCompanyHistory: HistoryType[] = [
	{
		period: 'Jun 2017 - Feb 2020',
		name: 'Clean Factomation, Inc.',
		department: 'Design department',
		duty1: 'Worked at a semiconductor handling machine company',
		duty2: 'Designed mechanical parts of STK, RM, CONVEYOR, VHL etc',
		duty3: 'Managed communication to Japanese headquater and American customer',
	},
	{
		period: '2017. 06 - 2020. 02',
		name: '크린팩토메이션(주)',
		department: '설계팀',
		duty1: '일본계 반도체반송장비제조기업 설계팀에서 근무하였습니다',
		duty2: 'STK, RM, CONVEYOR, VHL등의 기계설계를 담당하였습니다',
		duty3: '미국 고객사 및 일본 본사와의 커뮤니케이션을 담당하였습니다',
	},
	{
		period: '2017. 06 - 2020. 02',
		name: 'Clean Factomation, Inc.',
		department: '設計チーム',
		duty1: '日本系半導体搬送装備製造企業の設計チームで勤務しました',
		duty2: 'STK、RM、CONVEYOR、VHLなどの機械設計を担当しました',
		duty3: 'アメリカの客先及び日本本社とのコミュニケーションを担当しました',
	},
];

export const schoolHistory: HistoryType[] = [
	{
		period: 'Mar 2008 - Feb 2015',
		name: 'Pukyong National University',
		department: 'Ocean Engineering',
		duty1: "Majored in ocean engineering at Korea's Pukyong national university",
		duty2: 'Studied dynamics about ocean and mechanics',
		duty3: 'Experienced student exchange at Malaysia',
	},
	{
		period: '2008. 03 - 2015. 02',
		name: '부경대학교',
		department: '해양공학과',
		duty1: '대한민국 부산광역시 소재 국립부경대학교에서 해양공학을 전공하였습니다',
		duty2: '해양 및 기계관련 역학에 대해 공부하였습니다',
		duty3: '말레이시아 교환학생생활을 경험하였습니다',
	},
	{
		period: '2008. 03 - 2015. 02',
		name: '釜慶大学(ブギョンデハク)',
		department: '海洋工学',
		duty1: '韓国の釜山広域市所在の国立釜慶大学で海洋工学を専攻しました',
		duty2: '海洋及び機械関連力学について勉強しました',
		duty3: 'マレーシア交換学生生活を経験しました',
	},
];

export const frontEndSkillSets = ['HTML/CSS', 'Javascript/Typescript', 'React', 'Redux', 'Vue', 'Sass'];
export const backEndSkillSets = ['Node.js', 'Javascript/Typescript', 'Express', 'Python', 'MySQL', 'Socket.io'];
export const cloudSkillSets = ['AWS', 'Netlify', 'CloudType', 'Deployment'];
export const miscSkillSets = ['Git', 'Linux', 'Vitest'];
