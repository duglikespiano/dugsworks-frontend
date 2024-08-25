import { useContext, Fragment } from 'react';
import CharacteristicText from './CharacteristicText';
import { CharacteristicBoxPropsType } from '../../../../../variables/types';
import { DarkmodeContext } from '../../../../../contexts/DarkmodeContext';
import '../../../../../scss/Home/Characteristics/CharacteristicBox/CharacteristicBox.scss';

export default function CharacteristicBox(props: CharacteristicBoxPropsType) {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<div id={`characteristic-box-${props.info.boxSide}`} className={isDarkmode ? 'dark' : ''}>
				<div className="characteristic-image">
					<img src={props.info.imageUrl} alt={props.info.imageAlt} />
				</div>
				<CharacteristicText keyword={props.info.keyword} title={props.info.title} contents={props.info.contents} />
			</div>
		</Fragment>
	);
}
