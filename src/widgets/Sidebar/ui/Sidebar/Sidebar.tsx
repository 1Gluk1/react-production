import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {useTranslation} from 'react-i18next';
import {LanguageSwitcher} from 'widgets/LanguageSwitcher';

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
			className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
		>
			<button
				data-testid='sidebar-toggle'
				onClick={onToggle}
			>
				{t('toggle_sidebar')}
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LanguageSwitcher
					className={cls.lang}
				/>
			</div>
		</div>
	);
};
