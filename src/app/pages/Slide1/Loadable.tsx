import { lazyLoad } from '../../../utils/loadable';

export const Slide1 = lazyLoad(
  () => import('./Slide1'),
  module => module.default,
);
