import { lazyLoad } from '../../../utils/loadable';

export const Slide2 = lazyLoad(
  () => import('./Slide2'),
  module => module.default,
);
