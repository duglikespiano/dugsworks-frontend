import { Fragment } from 'react';
import CharacteristicTextEn from './CharacteristicTextEn';
import styles from './CharacteristicBox.module.scss';

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

export default function CharacteristicBox(props: CharacteristicBoxProps) {
	return (
		<Fragment>
			<div className={styles[`characteristic-box-${props.info.boxSide}-en`]}>
				<div className={styles['characteristic-image-cropper-en']}>
					<img src={props.info.imageUrl} alt={props.info.imageAlt} className={styles['characteristic-picture']} />
				</div>
				<CharacteristicTextEn keyword={props.info.keyword} title={props.info.title} contents={props.info.contents} />
			</div>
		</Fragment>
	);
}
