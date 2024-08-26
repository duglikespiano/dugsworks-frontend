import { Fragment } from 'react';
import CharacteristicBox from './CharacteristicBox/CharacteristicBox';
import turtleImageURL from '../../../../images/turtle-image.jpg';
import theGoldenGateBridgeImageURL from '../../../../images/the-golden-gate-bridge-image.jpg';
import cloversImageURL from '../../../../images/clovers-image.jpg';

const turtleInfo = {
	imageUrl: turtleImageURL,
	imageAlt: 'turtle',
	keyword: 'カメ',
	title: '私は諦めないカメです',
	contents: ['ウサギのみたいに早くはないですが、', '絶対に諦めません。', '最後まど努力して目標を遂げます。'],
	boxSide: 'left',
};

const theGoldenGateBridgeInfo = {
	imageUrl: theGoldenGateBridgeImageURL,
	imageAlt: 'theGoldenGateBridge',
	keyword: '夢',
	title: '私はいつも夢を持っています',
	contents: ['私の夢は四か国語ができる、', 'フルスタックエンジニアになることです。', '全世界の人達のために働きたいです。'],
	boxSide: 'right',
};

const cloversInfo = {
	imageUrl: cloversImageURL,
	imageAlt: 'clovers',
	keyword: '努力',
	title: '私は毎日成長します',
	contents: ['私はたゆまぬ努力の力を信じています。', '今はジュニア開発者ですが、', '将来に必ずウェブ専門家になります。'],
	boxSide: 'left',
};

export default function Characteristic(props: { isDarkmode: boolean }) {
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
