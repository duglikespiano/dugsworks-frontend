import { Fragment } from 'react';
import SkillsJa from './SkillsJa/SkillsJa';
import styles from './SkillSetsJa.module.scss';

const frondEndSkillSets = [
	{ title: 'フロントエンド' },
	{ skills: ['HTML/CSS', 'Javascript/Typescript', 'React', 'Vue', 'Wordpress', 'Sass'] },
];
const backEndSkillSets = [
	{ title: 'バックエンド' },
	{ skills: ['Node.js', 'Javascript/Typescript', 'Express', 'Python', 'MySQL', 'Socket.io'] },
];
const cloudSkillSets = [{ title: 'クラウド' }, { skills: ['AWS', 'Netlify', 'CloudType', 'DNS'] }];
const miscSkillSets = [{ title: 'その他' }, { skills: ['Git', 'Linux', 'UnitTest'] }];

export default function SkillSetsJa() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ja']}>
				<div className={styles['skillsets-box-title-ja']}>活用可能技術</div>
				<div className={styles['skillsets-box-content-ja']}>
					<SkillsJa skills={frondEndSkillSets} />
					<SkillsJa skills={backEndSkillSets} />
					<SkillsJa skills={cloudSkillSets} />
					<SkillsJa skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
