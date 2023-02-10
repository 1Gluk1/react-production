import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LanguageSwitcher} from 'widgets/LanguageSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {Routes} from 'shared/config/routes/routes.config';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import HomePageIcon from 'shared/assets/icons/home-page.svg';

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {
	const {t} = useTranslation('components/sidebar');
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(collapsed => !collapsed);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [
				className,
			])}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<div>
					<AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={Routes.MainPage}>
						<HomePageIcon className={cls.icon} />
						<span className={cls.link}>{t('main_page')}</span>
					</AppLink>
				</div>

				<div>
					<AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={Routes.AboutPage}>
						<AboutPageIcon className={cls.icon} />
						<span className={cls.link}>{t('about_page')}</span>
					</AppLink>
				</div>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher className={cls.lang} short={collapsed} />
			</div>
		</div>
	);
};
