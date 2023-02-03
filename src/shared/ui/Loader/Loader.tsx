import {classNames} from 'shared/lib/class-names/class-names';
import './Loader.scss';

type LoaderProps = {
	className?: string;
};
export const Loader = ({className}: LoaderProps) => (
	<div className={classNames('lds-roller', {}, [className])}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);
