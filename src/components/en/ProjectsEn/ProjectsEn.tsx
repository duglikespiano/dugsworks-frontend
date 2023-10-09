import { Fragment } from 'react';
import ProjectsKeywordsEn from './ProjectsKeywordsEn/ProjectsKeywordsEn';
import ProjectsListEn from './ProjectsListEn/ProjectsListEn';
import styles from './ProjectsEn.module.scss';

export default function ProjectsEn() {
	return (
		<Fragment>
			<div className={styles['projects-box']}>
				<div className={styles['skills-filter-title']}>Skills filter</div>
				<div className={styles['projects-skills-filter-description']}>Click skills to filter projects</div>
				<ProjectsKeywordsEn />
				<hr className={styles['horizontalrule']} />
				<div className={styles['projects-title']}>Projects</div>
				<ProjectsListEn />
			</div>
		</Fragment>
	);
}
