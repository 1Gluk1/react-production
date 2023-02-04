import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/ErrorBoundary';

const MainPage = () => {
	const {t} = useTranslation('pages/main');

	return (
		<div>
			{t('header')}
			<BugButton />
		</div>
	);
};

export default MainPage;
