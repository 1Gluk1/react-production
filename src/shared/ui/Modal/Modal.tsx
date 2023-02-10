import {classNames} from 'shared/lib/class-names/class-names';
import cls from './Modal.module.scss';
import {type ReactNode} from 'react';

type ModalProps = {
	className?: string;
	children?: ReactNode;
};
export const Modal = (props: ModalProps) => {
	const {className, children} = props;

	return (<div className={classNames(cls.Modal, {}, [className])}>
		<div className={cls.overlay}>
			<div className={cls.content}>
				{children}
			</div>
		</div>
	</div>);
};
