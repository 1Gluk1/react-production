import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Button.module.scss';
import {type ButtonHTMLAttributes, type FC} from 'react';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size-m',
	L = 'size-l',
	XL = 'size-xl',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;

} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
	};

	return (
		<button className={classNames(cls.Button, mods, [className, cls[theme]])}
			type='button'
			{...otherProps}
		>
			{children}
		</button>
	);
};
