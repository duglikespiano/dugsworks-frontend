import { Fragment } from 'react';
import CharacteristicTextJa from './CharacteristicText';
import styles from './CharacteristicBox.module.scss';
import { CharacteristicBoxPropsType } from '../../../../../variables/types';

export default function CharacteristicBoxJa(props: CharacteristicBoxPropsType) {
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
