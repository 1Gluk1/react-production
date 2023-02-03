import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from 'shared/config/routes/routes.config';
import {PageLoader} from 'widgets/PageLoader';

const AppRouter = () => <Routes>
	{routesConfig.map(({path, element}) => (
		<Route
			key={path}
			element={
				<Suspense fallback={<PageLoader />}>
					<div className='page-wrapper'>
						{element}
					</div>
				</Suspense>
			}
			path={path}
		/>
	))}
</Routes>;

export default AppRouter;
