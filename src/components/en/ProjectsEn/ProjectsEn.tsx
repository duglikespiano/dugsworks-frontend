import { Fragment } from 'react';
import ProjectsKeywordsEn from './ProjectsKeywordsEn/ProjectsKeywordsEn';
import ProjectsListEn from './ProjectsListEn/ProjectsListEn';
import { useSelector } from 'react-redux';
import { RootState } from '../../../sliceStore';
import styles from './ProjectsEn.module.scss';

export default function ProjectsEn() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);
	return (
		<Fragment>
			<div className={styles['projects-box']}>
				<div className={styles['skills-filter-title']}>Skills filter</div>
				<div className={styles['projects-skills-filter-description']}>Click skills to filter projects</div>
				<div className={styles['projects-filtered-description']}>
					<span className={styles['projects-filtered-description-emphasize-text']}>{projectsList.length}</span> of{' '}
					<span className={styles['projects-filtered-description-emphasize-text']}>
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					Project(s) selected
				</div>
				<ProjectsKeywordsEn />
				<hr className={styles['horizontalrule']} />
				<div className={styles['projects-title']}>Projects</div>
				<ProjectsListEn />
			</div>
		</Fragment>
	);
}
