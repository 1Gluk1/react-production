import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Modal.module.scss';
import {type ReactNode, useState, useRef, useEffect, useCallback} from 'react';
import {Portal} from '../Portal/Portal';
import {useTheme} from 'app/providers/ThemeProvider';

type ModalProps = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
};

const CLOSE_ANIMATION_DELAY_MS = 300;

export const Modal = (props: ModalProps) => {
	const {className, children, isOpen, onClose} = props;
	const {theme} = useTheme();

	const onContentClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, CLOSE_ANIMATION_DELAY_MS);
		}
	}, [onClose]);

	const onKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler]);

	const [isClosing, setIsClosing] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
		[cls[theme]]: true,
	};

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
