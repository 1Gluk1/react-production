import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('pages/main');

    return (
        <div>
            {t('header')}
        </div>
    );
};

export default MainPage;