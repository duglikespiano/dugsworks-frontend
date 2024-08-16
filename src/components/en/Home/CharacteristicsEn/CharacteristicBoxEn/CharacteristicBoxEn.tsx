import { Fragment } from 'react';
import CharacteristicTextEn from './CharacteristicTextEn';
import styles from './CharacteristicBoxEn.module.scss';
import { CharacteristicBoxPropsType } from '../../../../types/types';

export default function CharacteristicBoxEn(props: CharacteristicBoxPropsType) {
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
