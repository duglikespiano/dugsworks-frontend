export interface SkillSetsPropsType {
	title: string;
	skills: string[];
	isDarkmode: boolean;
}

export interface CharacteristicTextPropsType {
	keyword: string;
	title: string;
	contents: string[];
	isDarkmode: boolean;
}

export interface CharacteristicBoxPropsType {
	imageUrl: string;
	imageAlt: string;
	keyword: string;
	title: string;
	contents: string[];
	boxSide: string;
}

export interface HistoryPropsType {
	history: HistoryType[];
	isDarkmode: boolean;
}

export interface HistoryType {
	period: string;
	name: string;
	department: string;
	duty1: string;
	duty2: string;
	duty3: string;
}
