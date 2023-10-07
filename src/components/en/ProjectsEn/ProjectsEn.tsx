import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../sliceStore';
import { projectsActions } from '../../../sliceStore';
import styles from './ProjectsEn.module.scss';

export default function ProjectsEn() {
	const projects = useSelector((state: RootState) => state.projects);
	const dispatch = useDispatch();

	const projectStatusHandler = (i: number) => {
		dispatch(projectsActions.statusToggle(i));
	};

	return <Fragment></Fragment>;
}
