import { Fragment } from 'react';
import CharacteristicBox from './CharacteristicBox/CharacteristicBox';
import turtleImageURL from '../../../../images/turtle.jpg';
import theGoldenGateBridgeImageURL from '../../../../images/the-golden-gate-bridge.jpg';
import cloversImageURL from '../../../../images/clovers.jpg';

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

export default function Characteristics(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="characteristics-boxes">
				<CharacteristicBox info={turtleInfo} isDarkmode={props.isDarkmode} />
				<CharacteristicBox info={theGoldenGateBridgeInfo} isDarkmode={props.isDarkmode} />
				<CharacteristicBox info={cloversInfo} isDarkmode={props.isDarkmode} />
				<div style={{ clear: 'both' }} />
			</div>
		</Fragment>
	);
}
