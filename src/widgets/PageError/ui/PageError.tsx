import {classNames} from 'shared/lib/class-names/class-names';
import cls from './PageError.module.scss';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

type IPageErrorProps = {
	className?: string;
};
export const PageError = ({className}: IPageErrorProps) => {
	const {t} = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t('unexpected_error')}</p>
			<Button
				onClick={reloadPage}
			>
				{t('reload_page')}
			</Button>
		</div>
	);
};
