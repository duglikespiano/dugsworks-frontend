import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../../variables/sliceStore';
import { projectsListType, projectsKeywordsType } from '../../../../../variables/sliceStore';
import '../../../../../scss/Projects/ProjectsList/ProjectBox/ProjectBox.scss';

export default function ProjectBox(props: projectsListType) {
	const projectsKeywords = useSelector((state: RootState) => state.projectsKeywords);

	return (
		<Fragment>
			<div id="project-box">
				<div className="project-title">{props.projectInfo.title}</div>
				<div className="project-description">{props.projectInfo.descriptionJa}</div>
				<div className="project-info-url">
					配布 :&nbsp;
					{props.projectInfo.deploymentURL === '' ? (
						'-'
					) : (
						<button className="project-info-navigate-button">
							<Link to={props.projectInfo.deploymentURL} target="_blank">
								こちらをクリック
							</Link>
						</button>
					)}
				</div>
				<div className="project-info-url">
					フロントエンドリポジトリ :&nbsp;
					{props.projectInfo.frontendRepositoryURL === '' ? (
						'-'
					) : (
						<button className="project-info-navigate-button">
							<Link to={props.projectInfo.frontendRepositoryURL} target="_blank">
								こちらをクリック
							</Link>
						</button>
					)}
				</div>
				<div className="project-info-url">
					バックエンドリポジトリ :&nbsp;
					{props.projectInfo.backendRepositoryURL === '' ? (
						'-'
					) : (
						<button className="project-info-navigate-button">
							<Link to={props.projectInfo.backendRepositoryURL} target="_blank">
								こちらをクリック
							</Link>
						</button>
					)}
				</div>
				<div className="project-skills-box">
					<div>関連技術 :</div>
					<div className="project-skills-label-box">
						{props.projectInfo.skills.map((item: string, i: number) => (
							<div
								className={
									projectsKeywords.filter((skills: projectsKeywordsType) => skills.keyword === item)[0].selected
										? 'project-skills-label-active'
										: 'project-skills-label'
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
