import React from 'react';
import { Loading } from '@/components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() => import('./Landing'), {
  fallback: <Loading />,
});
// Sidebar Page
export const Sidebar = loadable(() => import('./Sidebar'), {
  fallback: <Loading />,
});
// Navbar Section
export const Navbar = loadable(() => import('./Pages/Navbar'), {
  fallback: <Loading />,
});
// NavbarTwo Section
export const NavbarTwo = loadable(() => import('./Pages/NavbarTwo'), {
  fallback: <Loading />,
});
// Step1 Section
export const Step1 = loadable(() => import('./Pages/Step1'), {
  fallback: <Loading />,
});
// CalculateNeed Section
export const CalculateNeed = loadable(() => import('./Pages/CalculateNeed'), {
  fallback: <Loading />,
});
// Footer Section
export const Footer = loadable(() => import('./Pages/Footer'), {
  fallback: <Loading />,
});
// Hero Section
export const Hero = loadable(() => import('./Pages/Hero'), {
  fallback: <Loading />,
});
// HomeTwo Section
export const HomeTwo = loadable(() => import('./Pages/HomeTwo'), {
  fallback: <Loading />,
});
// HomeThree Section
export const HomeThree = loadable(() => import('./Pages/HomeThree'), {
  fallback: <Loading />,
});
// HomeSlider Section
export const HomeSlider = loadable(() => import('./Pages/HomeSlider'), {
  fallback: <Loading />,
});
// HomeSlider Section
export const HomeFaq = loadable(() => import('./Pages/HomeFaq'), {
  fallback: <Loading />,
});
// HomeSlider Section
export const CreateKai = loadable(() => import('./Pages/CreateKai'), {
  fallback: <Loading />,
});
// Financial Section
export const Financial = loadable(() => import('./Pages/Financial'), {
  fallback: <Loading />,
});
// How it works
export const HowItWorks = loadable(() => import('./Pages/HowItWorks'), {
  fallback: <Loading />,
});
// How it works
export const PlanDetails = loadable(() => import('./Pages/PlanDetails'), {
  fallback: <Loading />,
});
// HomeSlider Section
export const EstimateBenefits = loadable(
  () => import('./SidebarPages/EstimateBenefits'),
  {
    fallback: <Loading />,
  },
);
// Static Pages
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loading />,
});
