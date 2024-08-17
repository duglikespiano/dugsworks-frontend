import { Fragment } from 'react';
import '../../../../scss/Home/Characteristics/Characteristics.scss';
import CharacteristicBox from './CharacteristicBox/CharacteristicBox';
import turtleImageURL from '../../../../images/turtle-image.jpg';
import theGoldenGateBridgeImageURL from '../../../../images/the-golden-gate-bridge-image.jpg';
import cloversImageURL from '../../../../images/clovers-image.jpg';

const turtleInfo = {
	imageUrl: turtleImageURL,
	imageAlt: 'turtle',
	keyword: 'Turtle',
	title: 'I am a turtle who never stops',
	contents: ['Although I am not quick like a rabbit.', 'Nobody can stop me.', 'I will achieve a goal in the end.'],
	boxSide: 'left',
};

const theGoldenGateBridgeInfo = {
	imageUrl: theGoldenGateBridgeImageURL,
	imageAlt: 'theGoldenGateBridge',
	keyword: 'Dream',
	title: 'I always dream',
	contents: [
		'My dream is becoming a fullstack engineer.',
		'who can speak four languages.',
		'I will work for the people around the world.',
	],
	boxSide: 'right',
};

const cloversInfo = {
	imageUrl: cloversImageURL,
	imageAlt: 'clovers',
	keyword: 'Effort',
	title: 'I grow everyday',
	contents: ["I believe in everyday's discipline.", "I'm a junior developer now.", 'But I will be an web expert someday.'],
	boxSide: 'left',
};

export default function Characteristics() {
	return (
		<Fragment>
			<div id="characteristics-boxes">
				<CharacteristicBox info={turtleInfo} />
				<CharacteristicBox info={theGoldenGateBridgeInfo} />
				<CharacteristicBox info={cloversInfo} />
				<div style={{ clear: 'both' }} />
			</div>
		</Fragment>
	);
}
