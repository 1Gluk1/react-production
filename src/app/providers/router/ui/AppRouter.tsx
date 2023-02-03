import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from 'shared/config/routes/routes.config';

const AppRouter = () => (
	<Suspense fallback={<div>Загрузка...</div>}>
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
	</Suspense>
);

export default AppRouter;
