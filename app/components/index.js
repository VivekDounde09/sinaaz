import React from 'react';
import loadable from '../utils/loadable';
import Loading from './Loading';

// Loading - No need to lazy load this component
export { default as Loading } from './Loading';

export const Welcome = loadable(() => import('./Welcome'), {
  fallback: <Loading />,
});

export const SliderCard = loadable(() => import('./SliderCard'), {
  fallback: <Loading />,
});
export const FaqCard = loadable(() => import('./FaqCard'), {
  fallback: <Loading />,
});
export const Tabber = loadable(() => import('./Tabber'), {
  fallback: <Loading />,
});
export const NavigationBtn = loadable(() => import('./NavigationBtn'), {
  fallback: <Loading />,
});
export const LoginModal = loadable(() => import('./LoginModal'), {
  fallback: <Loading />,
});
export const RegisterModal = loadable(() => import('./RegisterModal'), {
  fallback: <Loading />,
});
export const MenuBar = loadable(() => import('./MenuBar'), {
  fallback: <Loading />,
});
export const Section1 = loadable(() => import('./Estimate/Section1'), {
  fallback: <Loading />,
});
export const Section2 = loadable(() => import('./Estimate/Section2'), {
  fallback: <Loading />,
});
export const Section3 = loadable(() => import('./Estimate/Section3'), {
  fallback: <Loading />,
});
