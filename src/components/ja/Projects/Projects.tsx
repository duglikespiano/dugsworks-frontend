import { Fragment } from 'react';
import ProjectsKeywords from './ProjectsKeywords/ProjectsKeywords';
import ProjectsList from './ProjectsList/ProjectsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../variables/sliceStore';
import '../../../scss/Projects/Projects.scss';

export default function Projects() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);
	return (
		<Fragment>
			<div id="projects-box">
				<div className="skills-filter-title">技術フィルター</div>
				<div className="projects-skills-filter-description">技術をクリックしたらプロジェクトがフィルタリングされます</div>
				<div className="projects-filtered-description">
					<span className="projects-filtered-description-emphasize-text">{projectsList.length}</span>個のプロジェクト中{' '}
					<span className="projects-filtered-description-emphasize-text">
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					個選択
				</div>
				<ProjectsKeywords />
				<hr className="horizontalrule" />
				<div className="projects-title">プロジェクト</div>
				<ProjectsList />
			</div>
		</Fragment>
	);
}
