import {type FC} from 'react';
import {Link, type LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/class-names/class-names';
import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;
export const AppLink: FC<AppLinkProps> = props => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{ children }
		</Link>
	);
};
