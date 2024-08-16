import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../../variables/sliceStore';
import { projectsListType, projectsKeywordsType } from '../../../../../variables/sliceStore';
import styles from './ProjectBoxJa.module.scss';

export default function ProjectBoxJa(props: projectsListType) {
	const projectsKeywords = useSelector((state: RootState) => state.projectsKeywords);

	return (
		<Fragment>
			<div className={styles['project-box']}>
				<div className={styles['project-title']}>{props.projectInfo.title}</div>
				<div className={styles['project-description']}>{props.projectInfo.descriptionJa}</div>
				<div className={styles['project-info-url']}>
					配布 :&nbsp;
					{props.projectInfo.deploymentURL === '' ? (
						'-'
					) : (
						<button className={styles['project-info-navigate-button']}>
							<Link to={props.projectInfo.deploymentURL} target="_blank">
								こちらをクリック
							</Link>
						</button>
					)}
				</div>
				<div className={styles['project-info-url']}>
					フロントエンドリポジトリ :&nbsp;
					{props.projectInfo.frontendRepositoryURL === '' ? (
						'-'
					) : (
						<button className={styles['project-info-navigate-button']}>
							<Link to={props.projectInfo.frontendRepositoryURL} target="_blank">
								こちらをクリック
							</Link>
						</button>
					)}
				</div>
				<div className={styles['project-info-url']}>
					バックエンドリポジトリ :&nbsp;
					{props.projectInfo.backendRepositoryURL === '' ? (
						'-'
					) : (
						<button className={styles['project-info-navigate-button']}>
							<Link to={props.projectInfo.backendRepositoryURL} target="_blank">
								こちらをクリック
							</Link>
						</button>
					)}
				</div>
				<div className={styles['project-skills-box']}>
					<div>関連技術 :</div>
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
