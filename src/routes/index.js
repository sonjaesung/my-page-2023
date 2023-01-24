import { Home, Developer, Career, Portfolio, Introduce } from '../pages';

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
    {
        path: '/introduce',
        element: <Introduce />,
    },
];
export default routes;
