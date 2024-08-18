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
				<div className="skills-filter-title">기술 필터</div>
				<div className="projects-skills-filter-description">기술을 클릭하면 프로젝트가 필터링됩니다</div>
				<div className="projects-filtered-description">
					<span className="projects-filtered-description-emphasize-text">{projectsList.length}</span>개의 프로젝트 중{' '}
					<span className="projects-filtered-description-emphasize-text">
						{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length}
					</span>{' '}
					개 선택
				</div>
				<ProjectsKeywords />
				<hr className="horizontalrule" />
				<div className="projects-title">프로젝트</div>
				<ProjectsList />
			</div>
		</Fragment>
	);
}
