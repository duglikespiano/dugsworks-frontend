import { Fragment } from 'react';
import styles from './CharacteristicKo.module.scss';
import CharacteristicBoxKo from './CharacteristicBoxKo/CharacteristicBoxKo';
import turtleImageURL from '../../../../images/turtle-image.jpg';
import theGoldenGateBridgeImageURL from '../../../../images/the-golden-gate-bridge-image.jpg';
import cloversImageURL from '../../../../images/clovers-image.jpg';

const turtleInfo = {
	imageUrl: turtleImageURL,
	imageAlt: 'turtle',
	keyword: '포기는 없다',
	title: '저는 포기하지 않는 거북이입니다',
	contents: ['토끼처럼 빠르진 않습니다만', '절대 멈추지 않습니다', '끝까지 노력하여 목표를 이루어 냅니다'],
	boxSide: 'left',
};

const theGoldenGateBridgeInfo = {
	imageUrl: theGoldenGateBridgeImageURL,
	imageAlt: 'theGoldenGateBridge',
	keyword: '꿈',
	title: '저는 항상 꿈을 꿉니다',
	contents: ['제 꿈은 4개국어를 하는', '풀스택 엔지니어가 되는 것입니다', '전 세계 사람들을 위해 일하고 싶습니다'],
	boxSide: 'right',
};

const cloversInfo = {
	imageUrl: cloversImageURL,
	imageAlt: 'clovers',
	keyword: '꾸준한 성장',
	title: '저는 매일 성장합니다',
	contents: ['저는 꾸준한 노력의 힘을 믿습니다', '지금은 비록 신입개발자입니다만', '장래에 꼭 웹 전문가가 될 것입니다'],
	boxSide: 'left',
};

export default function CharacteristicJa() {
	return (
		<Fragment>
			<div className={styles['characteristics-boxes-ko']}>
				<CharacteristicBoxKo info={turtleInfo} />
				<CharacteristicBoxKo info={theGoldenGateBridgeInfo} />
				<CharacteristicBoxKo info={cloversInfo} />
				<div style={{ clear: 'both' }} />
			</div>
		</Fragment>
	);
}
