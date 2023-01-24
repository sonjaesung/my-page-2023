import { Home, Developer, Career } from '../pages';

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
];
export default routes;
