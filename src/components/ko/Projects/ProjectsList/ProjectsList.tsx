import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../variables/sliceStore';
import ProjectBox from './ProjectBox/ProjectBox';

export default function ProjectsList(props: { isDarkmode: boolean }) {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const selectedProjectKeywordsIncludeProjects = useSelector((state: RootState) => state.selectedProjectKeywordsIncludeProjects);

	return (
		<Fragment>
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length === 0 && (
				<Fragment>
					{projectsList.map((item, i) => (
						<ProjectBox projectInfo={item} isDarkmode={props.isDarkmode} key={i} />
					))}
				</Fragment>
			)}
			{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.length !== 0 && (
				<Fragment>
					{selectedProjectKeywordsIncludeProjects.selectedKeywordsIncludeProjects.map((item, i) => (
						<ProjectBox projectInfo={item} isDarkmode={props.isDarkmode} key={i} />
					))}
				</Fragment>
			)}
		</Fragment>
	);
}
