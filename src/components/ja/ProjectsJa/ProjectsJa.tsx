import { Fragment } from 'react';
import ProjectsKeywordsEn from './ProjectsKeywordsJa/ProjectsKeywordsJa';
import ProjectsListEn from './ProjectsListJa/ProjectsListJa';
import styles from './ProjectsJa.module.scss';

export default function ProjectsJa() {
	return (
		<Fragment>
			<div className={styles['projects-box']}>
				<div className={styles['skills-filter-title']}>技術フィルター</div>
				<div className={styles['projects-skills-filter-description']}>
					技術をクリックしたらプロジェクトがフィルタリングされます
				</div>
				<ProjectsKeywordsEn />
				<hr className={styles['horizontalrule']} />
				<div className={styles['projects-title']}>プロジェクト</div>
				<ProjectsListEn />
			</div>
		</Fragment>
	);
}
