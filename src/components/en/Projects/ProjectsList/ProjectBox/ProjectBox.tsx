import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../variables/sliceStore';
import { projectsListType, projectsKeywordsType } from '../../../../../variables/sliceStore';
import styles from './ProjectBox.module.scss';
import { Link } from 'react-router-dom';

export default function ProjectBoxEn(props: projectsListType) {
	const projectsKeywords = useSelector((state: RootState) => state.projectsKeywords);

	return (
		<Fragment>
			<div className={styles['project-box']}>
				<div className={styles['project-title']}>{props.projectInfo.title}</div>
				<div className={styles['project-description']}>{props.projectInfo.descriptionEn}</div>
				<div className={styles['project-info-url']}>
					Deployment URL :&nbsp;
					{props.projectInfo.deploymentURL === '' ? (
						'-'
					) : (
						<button className={styles['project-info-navigate-button']}>
							<Link to={props.projectInfo.deploymentURL} target="_blank">
								Click Here
							</Link>
						</button>
					)}
				</div>
				<div className={styles['project-info-url']}>
					FrontEnd Repository :&nbsp;
					{props.projectInfo.frontendRepositoryURL === '' ? (
						'-'
					) : (
						<button className={styles['project-info-navigate-button']}>
							<Link to={props.projectInfo.frontendRepositoryURL} target="_blank">
								Click Here
							</Link>
						</button>
					)}
				</div>
				<div className={styles['project-info-url']}>
					BackEnd Repository :&nbsp;
					{props.projectInfo.backendRepositoryURL === '' ? (
						'-'
					) : (
						<button className={styles['project-info-navigate-button']}>
							<Link to={props.projectInfo.backendRepositoryURL} target="_blank">
								Click Here
							</Link>
						</button>
					)}
				</div>
				<div className={styles['project-skills-box']}>
					<div>Related Skills :</div>
					<div className={styles['project-skills-label-box']}>
						{props.projectInfo.skills.map((item: string, i: number) => (
							<div
								className={
									projectsKeywords.filter((skills: projectsKeywordsType) => skills.keyword === item)[0].selected
										? styles['project-skills-label-active']
										: styles['project-skills-label']
								}
								key={i}
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
