import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../variables/sliceStore';
import ProjectBoxEn from './ProjectBox/ProjectBox';

export default function ProjectsListEn() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);

	return (
		<Fragment>
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length === 0 && (
				<Fragment>
					{projectsList.map((item, i) => (
						<ProjectBoxEn projectInfo={item} key={i} />
					))}
				</Fragment>
			)}
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length !== 0 && (
				<Fragment>
					{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.map((item, i) => (
						<ProjectBoxEn projectInfo={item} key={i} />
					))}
				</Fragment>
			)}
		</Fragment>
	);
}
