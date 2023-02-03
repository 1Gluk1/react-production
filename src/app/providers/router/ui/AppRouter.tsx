import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from 'shared/config/routes/routes.config';
import {useTranslation} from 'react-i18next';

const AppRouter = () => {
	const {t} = useTranslation();

	return <Suspense fallback={<div>{t('loading')}</div>}>
		<Routes>
			{routesConfig.map(({path, element}) => (
				<Route
					key={path}
					element={
						<div className='page-wrapper'>
							{element}
						</div>
					}
					path={path}
				/>
			))}
		</Routes>
	</Suspense>;
};

export default AppRouter;
