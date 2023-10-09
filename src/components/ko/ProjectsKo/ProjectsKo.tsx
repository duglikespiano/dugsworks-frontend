import { Fragment } from 'react';
import ProjectsKeywordsEn from './ProjectsKeywordsKo/ProjectsKeywordsKo';
import ProjectsListEn from './ProjectsListKo/ProjectsListKo';
import styles from './ProjectsKo.module.scss';

export default function ProjectsKo() {
	return (
		<Fragment>
			<div className={styles['projects-box']}>
				<div className={styles['skills-filter-title']}>기술 필터</div>
				<div className={styles['projects-skills-filter-description']}>기술을 클릭하면 프로젝트가 필터링됩니다</div>
				<ProjectsKeywordsEn />
				<hr className={styles['horizontalrule']} />
				<div className={styles['projects-title']}>프로젝트</div>
				<ProjectsListEn />
			</div>
		</Fragment>
	);
}
