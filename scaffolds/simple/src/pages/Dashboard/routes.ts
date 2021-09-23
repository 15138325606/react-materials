import { IRouterConfig } from 'ice';
import Home from '@/pages/Dashboard/Home';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
