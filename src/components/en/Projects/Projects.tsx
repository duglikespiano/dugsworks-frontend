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
				<div className="skills-filter-title">Skills filter</div>
				<div className="projects-skills-filter-description">Click skills to filter projects</div>
				<div className="projects-filtered-description">
					<span className="projects-filtered-description-emphasize-text">{projectsList.length}</span> of{' '}
					<span className="projects-filtered-description-emphasize-text">
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					Project(s) selected
				</div>
				<ProjectsKeywords isDarkmode={isDarkmode} />
				<hr className="horizontalrule" />
				<div className="projects-title">Projects</div>
				<ProjectsList isDarkmode={isDarkmode} />
			</div>
		</Fragment>
	);
}
