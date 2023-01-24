import withSplitting from "../routes/withSplitting";

export const Home = withSplitting(() => import('../pages/Home'));
export const Developer = withSplitting(() => import('../pages/Developer'));
export const Career = withSplitting(() => import('../pages/Career'));

