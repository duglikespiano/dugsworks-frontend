import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../sliceStore';
import ProjectBoxJa from './ProjectBoxJa/ProjectBoxJa';

export default function ProjectsListJa() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);

	return (
		<Fragment>
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length === 0 && (
				<Fragment>
					{projectsList.map((item, i) => (
						<ProjectBoxJa projectInfo={item} key={i} />
					))}
				</Fragment>
			)}
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length !== 0 && (
				<Fragment>
					{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.map((item, i) => (
						<ProjectBoxJa projectInfo={item} key={i} />
					))}
				</Fragment>
			)}
		</Fragment>
	);
}
