import {classNames} from 'shared/lib/class-names/class-names';
import cls from './NotFoundPage.module.scss';
import {useTranslation} from 'react-i18next';

type NotFoundPageProps = {
	className?: string;
};
export const NotFoundPage = ({className}: NotFoundPageProps) => {
	const {t} = useTranslation();
	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			{t('page_not_found')}
		</div>);
};
