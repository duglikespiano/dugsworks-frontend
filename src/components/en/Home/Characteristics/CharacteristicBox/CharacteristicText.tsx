import { Fragment } from 'react';
import { CharacteristicTextPropsType } from '../../../../../variables/types';
import '../../../../../scss/Home/Characteristics/CharacteristicBox/CharacteristicText.scss';

export default function CharacteristicText(props: CharacteristicTextPropsType) {
	return (
		<Fragment>
			<div id="characteristic-texts-box" className={props.isDarkmode ? 'dark' : ''}>
				<div className="characteristic-text-keyword">{props.keyword}</div>
				<div className="characteristic-text-title">{props.title}</div>
				{props.contents.map((content: string, i: number) => (
					<div className="characteristic-text-content" key={i}>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}
