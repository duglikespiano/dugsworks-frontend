import { Fragment } from 'react';
import ProjectsKeywordsEn from './ProjectsKeywords/ProjectsKeywords';
import ProjectsListEn from './ProjectsList/ProjectsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../variables/sliceStore';
import styles from './ProjectsJa.module.scss';

export default function ProjectsJa() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);
	return (
		<Fragment>
			<div className={styles['projects-box']}>
				<div className={styles['skills-filter-title']}>技術フィルター</div>
				<div className={styles['projects-skills-filter-description']}>
					技術をクリックしたらプロジェクトがフィルタリングされます
				</div>
				<div className={styles['projects-filtered-description']}>
					<span className={styles['projects-filtered-description-emphasize-text']}>{projectsList.length}</span>個のプロジェクト中{' '}
					<span className={styles['projects-filtered-description-emphasize-text']}>
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					個選択
				</div>
				<ProjectsKeywordsEn />
				<hr className={styles['horizontalrule']} />
				<div className={styles['projects-title']}>プロジェクト</div>
				<ProjectsListEn />
			</div>
		</Fragment>
	);
}
