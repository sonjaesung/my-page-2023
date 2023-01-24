import { Home, Developer } from '../pages';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/developer/:tab',
        element: <Developer />,
    },
];
export default routes;
