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
				<div className="project-description">{props.projectInfo.descriptionKo}</div>
				<div className="project-info-url">
					배포 :&nbsp;
					{props.projectInfo.deploymentURL === '' ? (
						'-'
					) : (
						<button className="project-info-navigate-button">
							<Link to={props.projectInfo.deploymentURL} target="_blank">
								이곳을 클릭
							</Link>
						</button>
					)}
				</div>
				<div className="project-info-url">
					프론트엔드저장소 :&nbsp;
					{props.projectInfo.frontendRepositoryURL === '' ? (
						'-'
					) : (
						<button className="project-info-navigate-button">
							<Link to={props.projectInfo.frontendRepositoryURL} target="_blank">
								이곳을 클릭
							</Link>
						</button>
					)}
				</div>
				<div className="project-info-url">
					백엔드저장소 :&nbsp;
					{props.projectInfo.backendRepositoryURL === '' ? (
						'-'
					) : (
						<button className="project-info-navigate-button">
							<Link to={props.projectInfo.backendRepositoryURL} target="_blank">
								이곳을 클릭
							</Link>
						</button>
					)}
				</div>
				<div className="project-skills-box">
					<div>관련 기술 :</div>
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
