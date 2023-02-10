import {classNames} from 'shared/lib/class-names/class-names';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

type LanguageSwitcherProps = {
	className?: string;
	short?: boolean;
};

export const LanguageSwitcher = ({className, short}: LanguageSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const toggleLanguage = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={toggleLanguage}
			theme={ButtonTheme.CLEAR}
		>
			{t(short ? 'current_language_short' : 'current_language_full')}
		</Button>
	);
};
