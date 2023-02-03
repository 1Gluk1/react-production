import {MainPage} from 'pages/MainPage';
import {type RouteProps} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage/';
import {NotFoundPage} from 'pages/NotFoundPage';

export const enum Routes {
	MainPage = '/',
	AboutPage = '/about',
	NotFoundPage = '*',
}

export const routesConfig: RouteProps[] = [
	{
		path: Routes.MainPage,
		element: <MainPage />,
	},
	{
		path: Routes.AboutPage,
		element: <AboutPage />,
	},
	{
		path: Routes.NotFoundPage,
		element: <NotFoundPage />,
	},
];
