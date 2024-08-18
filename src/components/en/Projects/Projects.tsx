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
				<div className="skills-filter-title">Skills filter</div>
				<div className="projects-skills-filter-description">Click skills to filter projects</div>
				<div className="projects-filtered-description">
					<span className="projects-filtered-description-emphasize-text">{projectsList.length}</span> of{' '}
					<span className="projects-filtered-description-emphasize-text">
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					Project(s) selected
				</div>
				<ProjectsKeywords />
				<hr className="horizontalrule" />
				<div className="projects-title">Projects</div>
				<ProjectsList />
			</div>
		</Fragment>
	);
}
