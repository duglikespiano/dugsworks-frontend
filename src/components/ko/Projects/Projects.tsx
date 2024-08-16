import { Fragment } from 'react';
import ProjectsKeywordsEn from './ProjectsKeywords/ProjectsKeywords';
import ProjectsListEn from './ProjectsList/ProjectsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../variables/sliceStore';
import styles from './Projects.module.scss';

export default function ProjectsKo() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);
	return (
		<Fragment>
			<div className={styles['projects-box']}>
				<div className={styles['skills-filter-title']}>기술 필터</div>
				<div className={styles['projects-skills-filter-description']}>기술을 클릭하면 프로젝트가 필터링됩니다</div>
				<div className={styles['projects-filtered-description']}>
					<span className={styles['projects-filtered-description-emphasize-text']}>{projectsList.length}</span>개의 프로젝트 중{' '}
					<span className={styles['projects-filtered-description-emphasize-text']}>
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					개 선택
				</div>
				<ProjectsKeywordsEn />
				<hr className={styles['horizontalrule']} />
				<div className={styles['projects-title']}>프로젝트</div>
				<ProjectsListEn />
			</div>
		</Fragment>
	);
}
