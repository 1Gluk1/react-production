import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};
export const Navbar = ({className}: NavbarProps) => (
	<div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.links}>
		</div>
	</div>
);
