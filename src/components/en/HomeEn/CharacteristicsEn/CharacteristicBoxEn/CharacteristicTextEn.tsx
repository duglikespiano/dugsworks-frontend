import { Fragment } from 'react';
import styles from './CharacteristicTextEn.module.scss';

interface CharacteristicTextProps {
	keyword: string;
	title: string;
	contents: string[];
}

export default function CharacteristicTextEn(props: CharacteristicTextProps) {
	return (
		<Fragment>
			<div className={styles['characteristic-texts-box-en']}>
				<div className={styles['characteristic-text-keyword-en']}>{props.keyword}</div>
				<div className={styles['characteristic-text-title-en']}>{props.title}</div>
				{props.contents.map((content: string, i: number) => (
					<div className={styles['characteristic-text-content-en']} key={i}>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}
