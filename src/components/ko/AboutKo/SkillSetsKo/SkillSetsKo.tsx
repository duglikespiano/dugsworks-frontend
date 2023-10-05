import { Fragment } from 'react';
import SkillsKo from './SkillsKo/SkillsKo';
import styles from './SkillSetsKo.module.scss';

const frondEndSkillSets = [
	{ title: '프론트엔드' },
	{ skills: ['HTML/CSS', 'Javascript/Typescript', 'React', 'Vue', 'Wordpress', 'Sass'] },
];
const backEndSkillSets = [
	{ title: '백엔드' },
	{ skills: ['Node.js', 'Javascript/Typescript', 'Express', 'Python', 'MySQL', 'Socket.io'] },
];
const cloudSkillSets = [{ title: '클라우드' }, { skills: ['AWS', 'Netlify', 'CloudType', 'DNS'] }];
const miscSkillSets = [{ title: '기타' }, { skills: ['Git', 'Linux', 'UnitTest'] }];

export default function SkillSetsKo() {
	return (
		<Fragment>
			<div className={styles['skillsets-box-ko']}>
				<div className={styles['skillsets-box-title-ko']}>활용가능기술</div>
				<div className={styles['skillsets-box-content-ko']}>
					<SkillsKo skills={frondEndSkillSets} />
					<SkillsKo skills={backEndSkillSets} />
					<SkillsKo skills={cloudSkillSets} />
					<SkillsKo skills={miscSkillSets} />
				</div>
			</div>
			<hr />
		</Fragment>
	);
}
