import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

type NavbarProps = {
	className?: string;
};
export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation('components/navbar');

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/'}
					className={cls.mainLink}
				>
					{t('main_page')}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/about'}
				>
					{t('about_page')}
				</AppLink>
			</div>
		</div>
	);
};
