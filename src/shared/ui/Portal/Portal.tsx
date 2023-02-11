import {type ReactNode} from 'react';
import {createPortal} from 'react-dom';

type IPortalProps = {
	children?: ReactNode;
	element?: HTMLElement;
};
export const Portal = (props: IPortalProps) => {
	const {
		children,
		element = document.getElementById('root'),
	} = props;

	return createPortal(children, element);
};
