import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"
import AboutPage from "pages/AboutPage/ui/AboutPage";

export const enum Routes {
    MainPage = '/',
    AboutPage = '/about'
}

export const routesConfig: RouteProps[] = [
    {
        path: Routes.MainPage,
        element: <MainPage />
    },
    {
        path: Routes.AboutPage,
        element: <AboutPage />
    },
]