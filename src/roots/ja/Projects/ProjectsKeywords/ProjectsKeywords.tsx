import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../variables/sliceStore';
import {
	projectsKeywordsActions,
	selectedProjectKeywordsActions,
	selectedProjectKeywordsIncludeProjectsActions,
	projectInfoType,
} from '../../../../variables/sliceStore';
import styles from './ProjectsKeywords.module.scss';

export default function ProjectsKeywordsJa() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const projectsKeywords = useSelector((state: RootState) => state.projectsKeywords);
	const dispatch = useDispatch();

	const projectStatusHandler = (i: number) => {
		dispatch(projectsKeywordsActions.statusToggle(i));
	};

	const selectedProjectsKeywordsHandler = (keyword: string) => {
		dispatch(selectedProjectKeywordsActions.checkToggle(keyword));
	};

	const selectedProjectKeywordsIncludeProjectsHandler = (projectsList: projectInfoType[], projectsKeywords: string) => {
		dispatch(selectedProjectKeywordsIncludeProjectsActions.filterProjectsBySkills({ projectsList, projectsKeywords }));
	};

	return (
		<Fragment>
			<div className={styles['project-keywords-box']}>
				{projectsKeywords.map((item, i) => (
					<div
						key={i}
						className={item.selected ? styles['project-keyword-button-clicked'] : styles['project-keyword-button']}
						onClick={() => {
							projectStatusHandler(i);
							selectedProjectsKeywordsHandler(projectsKeywords[i].keyword);
							selectedProjectKeywordsIncludeProjectsHandler(projectsList, projectsKeywords[i].keyword);
						}}
					>
						{item.keyword}
					</div>
				))}
			</div>
		</Fragment>
	);
}
