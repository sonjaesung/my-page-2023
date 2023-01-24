import { Home, Developer, Career, Portfolio } from '../pages';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/developer/:tab',
        element: <Developer />,
    },
    {
        path: '/career/:tab',
        element: <Career />,
    },
    {
        path: '/portfolio/:tab',
        element: <Portfolio />,
    },
];
export default routes;
