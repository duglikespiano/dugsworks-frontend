import { Fragment } from 'react';
import CharacteristicTextKo from './CharacteristicTextKo';
import styles from './CharacteristicBoxKo.module.scss';

export interface CharacteristicBoxProps {
	info: {
		imageUrl: string;
		imageAlt: string;
		keyword: string;
		title: string;
		contents: string[];
		boxSide: string;
	};
}

export default function CharacteristicBoxKo(props: CharacteristicBoxProps) {
	return (
		<Fragment>
			<div className={styles[`characteristic-box-${props.info.boxSide}-ko`]}>
				<div className={styles['characteristic-image-cropper-ko']}>
					<img src={props.info.imageUrl} alt={props.info.imageAlt} className={styles['characteristic-picture']} />
				</div>
				<CharacteristicTextKo keyword={props.info.keyword} title={props.info.title} contents={props.info.contents} />
			</div>
		</Fragment>
	);
}
