import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../variables/sliceStore';
import ProjectBoxKo from './ProjectBox/ProjectBox';

export default function ProjectsListKo() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);

	return (
		<Fragment>
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length === 0 && (
				<Fragment>
					{projectsList.map((item, i) => (
						<ProjectBoxKo projectInfo={item} key={i} />
					))}
				</Fragment>
			)}
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length !== 0 && (
				<Fragment>
					{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.map((item, i) => (
						<ProjectBoxKo projectInfo={item} key={i} />
					))}
				</Fragment>
			)}
		</Fragment>
	);
}
