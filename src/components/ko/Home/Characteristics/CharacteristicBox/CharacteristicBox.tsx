import { Fragment } from 'react';
import CharacteristicTextKo from './CharacteristicTextKo';
import styles from './CharacteristicBoxKo.module.scss';
import { CharacteristicBoxPropsType } from '../../../../../variables/types';

export default function CharacteristicBoxKo(props: CharacteristicBoxPropsType) {
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
