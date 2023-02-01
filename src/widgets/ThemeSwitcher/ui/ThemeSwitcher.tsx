import { classNames } from "shared/lib/class-names/class-names";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface IThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            { theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
        </Button>
    );
};