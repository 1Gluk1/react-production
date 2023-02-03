import {useTranslation} from 'react-i18next';

const AboutPage = () => {
	const {t} = useTranslation('pages/about');

	return (
		<div>
			{t('header')}
		</div>
	);
};

export default AboutPage;
