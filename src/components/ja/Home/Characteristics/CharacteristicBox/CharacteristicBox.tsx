import { Fragment } from 'react';
import CharacteristicText from './CharacteristicText';
import { CharacteristicBoxPropsType } from '../../../../../variables/types';
import '../../../../../scss/Home/Characteristics/CharacteristicBox/CharacteristicBox.scss';

export default function CharacteristicBox(props: CharacteristicBoxPropsType) {
	return (
		<Fragment>
			<div id={`characteristic-box-${props.info.boxSide}`}>
				<div className="characteristic-image">
					<img src={props.info.imageUrl} alt={props.info.imageAlt} className="characteristic-picture" />
				</div>
				<CharacteristicText keyword={props.info.keyword} title={props.info.title} contents={props.info.contents} />
			</div>
		</Fragment>
	);
}
