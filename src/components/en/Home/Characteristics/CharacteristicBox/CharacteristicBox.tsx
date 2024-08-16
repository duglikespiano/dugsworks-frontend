import { Fragment } from 'react';
import CharacteristicTextEn from './CharacteristicText';
import './CharacteristicBox.scss';
import { CharacteristicBoxPropsType } from '../../../../../variables/types';

export default function CharacteristicBox(props: CharacteristicBoxPropsType) {
	return (
		<Fragment>
			<div id={`characteristic-box-${props.info.boxSide}`}>
				<div className="characteristic-image-cropper">
					<img src={props.info.imageUrl} alt={props.info.imageAlt} className="characteristic-picture" />
				</div>
				<CharacteristicTextEn keyword={props.info.keyword} title={props.info.title} contents={props.info.contents} />
			</div>
		</Fragment>
	);
}
