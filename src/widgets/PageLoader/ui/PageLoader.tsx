import {classNames} from 'shared/lib/class-names/class-names';
import cls from './PageLoader.module.scss';
import {Loader} from 'shared/ui/Loader/Loader';

type IPageLoaderProps = {
	className?: string;
};
export const PageLoader = ({className}: IPageLoaderProps) => (
	<div className={classNames(cls.PageLoader, {}, [className])}>
		<Loader/>
	</div>
);
