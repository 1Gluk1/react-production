import {classNames} from 'shared/lib/class-names/class-names';
import cls from './LanguageSwitcher.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

type LanguageSwitcherProps = {
	className?: string;
};

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const toggleLanguage = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames(cls.LanguageSwitcher, {}, [className])}
			onClick={toggleLanguage}
			theme={ThemeButton.CLEAR}
		>
			{t('current_language')}
		</Button>
	);
};
