import {classNames} from 'shared/lib/class-names/class-names';
import {useTheme} from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

type ThemeSwitcherProps = {
	className?: string;
};
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {toggleTheme} = useTheme();

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			<ThemeIcon className={cls.switchIcon} />
		</Button>
	);
};
