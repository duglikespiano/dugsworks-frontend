import { Fragment } from 'react';
import CharacteristicTextJa from './CharacteristicTextJa';
import styles from './CharacteristicBoxJa.module.scss';

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

export default function CharacteristicBoxJa(props: CharacteristicBoxProps) {
	return (
		<Fragment>
			<div className={styles[`characteristic-box-${props.info.boxSide}-ja`]}>
				<div className={styles['characteristic-image-cropper-ja']}>
					<img src={props.info.imageUrl} alt={props.info.imageAlt} className={styles['characteristic-picture']} />
				</div>
				<CharacteristicTextJa keyword={props.info.keyword} title={props.info.title} contents={props.info.contents} />
			</div>
		</Fragment>
	);
}
