import { useContext, Fragment } from 'react';
import ProjectsKeywords from './ProjectsKeywords/ProjectsKeywords';
import ProjectsList from './ProjectsList/ProjectsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../variables/sliceStore';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';
import '../../../scss/Projects/Projects.scss';

export default function Projects() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);
	const { isDarkmode } = useContext(DarkmodeContext);

	return (
		<Fragment>
			<div id="projects-box" className={isDarkmode ? 'dark' : ''}>
				<div className="skills-filter-title">技術フィルター</div>
				<div className="projects-skills-filter-description">技術をクリックしたらプロジェクトがフィルタリングされます</div>
				<div className="projects-filtered-description">
					<span className="projects-filtered-description-emphasize-text">{projectsList.length}</span>個のプロジェクト中{' '}
					<span className="projects-filtered-description-emphasize-text">
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					個選択
				</div>
				<ProjectsKeywords isDarkmode={isDarkmode} />
				<hr className="horizontalrule" />
				<div className="projects-title">プロジェクト</div>
				<ProjectsList isDarkmode={isDarkmode} />
			</div>
		</Fragment>
	);
}
