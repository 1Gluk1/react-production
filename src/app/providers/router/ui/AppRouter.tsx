import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routesConfig } from 'shared/config/routes/routes.config';


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {routesConfig.map(({path, element}) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;