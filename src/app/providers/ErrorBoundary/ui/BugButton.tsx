import {Button} from 'shared/ui/Button/Button';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

// Only for testing
export const BugButton = () => {
	const {t} = useTranslation();
	const [error, setError] = useState<boolean>(false);

	const throwError = () => {
		setError(true);
	};

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (<Button onClick={throwError}>{t('throw_error')}</Button>);
};
