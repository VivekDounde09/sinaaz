import React from 'react';
import {
  Footer,
  HomeFaq,
  Hero,
  HomeSlider,
  HomeThree,
  HomeTwo,
} from '../pageListAsync';

function Landing() {
  return (
    <div className="">
      <Hero />
      <HomeTwo />
      <HomeThree />
      <HomeSlider />
      <HomeFaq />
      <Footer />
    </div>
  );
}

export default Landing;
