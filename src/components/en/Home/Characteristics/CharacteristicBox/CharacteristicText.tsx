import { Fragment } from 'react';
import './CharacteristicText.scss';
import { CharacteristicTextPropsType } from '../../../../../variables/types';

export default function CharacteristicText(props: CharacteristicTextPropsType) {
	return (
		<Fragment>
			<div id="characteristic-texts-box">
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
