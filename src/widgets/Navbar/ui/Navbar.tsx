import { classNames } from 'shared/lib/class-names/class-names';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface INavbarProps {
    className?: string;
}
export const Navbar = ({ className }: INavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
