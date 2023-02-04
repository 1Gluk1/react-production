import {Button} from 'shared/ui/Button/Button';
import {useEffect, useState} from 'react';

export const BugButton = () => {
	const [error, setError] = useState<boolean>(false);

	const throwError = () => {
		setError(true);
	};

	useEffect(() => {
		throw new Error();
	}, [error]);

	return (<Button onClick={throwError}>Throw error</Button>);
};
