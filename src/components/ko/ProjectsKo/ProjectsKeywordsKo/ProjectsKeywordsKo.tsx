import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../sliceStore';
import {
	projectsKeywordsActions,
	selectedProjectKeywordsActions,
	selectedProjectKeywordsIncludeProjectsActions,
} from '../../../../sliceStore';
import styles from './ProjectsKeywordsKo.module.scss';

export default function ProjectsKeywordsKo() {
	const projectsList = useSelector((state: RootState) => state.projectsList);
	const projectsKeywords = useSelector((state: RootState) => state.projectsKeywords);
	const dispatch = useDispatch();

	const projectStatusHandler = (i: number) => {
		dispatch(projectsKeywordsActions.statusToggle(i));
	};

	const selectedProjectsKeywordsHandler = (keyword: string) => {
		dispatch(selectedProjectKeywordsActions.checkToggle(keyword));
	};

	const selectedProjectKeywordsIncludeProjectsHandler = (projectsList: any, projectsKeywords: string) => {
		dispatch(selectedProjectKeywordsIncludeProjectsActions.test({ projectsList, projectsKeywords }));
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
