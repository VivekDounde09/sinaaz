export const navLinks = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Our Offerings',
    path: 'intro',
  },
  {
    id: 3,
    title: 'Testimonials',
    path: '/',
  },
  {
    id: 4,
    title: 'About IIia',
    path: '/',
  },
  {
    id: 5,
    title: 'About NIW',
    path: '/',
  },
  {
    id: 6,
    title: 'Agent Locator',
    path: '/',
  },
];

export const cardData = [
  {
    id: 1,
    image: '/images/HomeSlider/one.png',
    text1: 'MultiGen',
    name: 'Bob Goff ',
    desc: 'Estate Planning Attorney',
  },
  {
    id: 2,
    image: '/images/HomeSlider/two.png',
    text1: 'CashStream',
    name: 'Stephaine Cohen',
    desc: 'VP and Senior Benefits Broker',
  },
  {
    id: 3,
    image: '/images/HomeSlider/three.png',
    text1: 'MultiGen',
    name: 'Bob Goff 2 ',
    desc: 'Estate Planning Attorney',
  },
  {
    id: 4,
    image: '/images/HomeSlider/four.png',
    text1: 'CashStream',
    name: 'Stephaine Cohen 3',
    desc: 'VP and Senior Benefits Broker',
  },
  {
    id: 5,
    image: '/images/HomeSlider/two.png',
    text1: 'CashStream',
    name: 'Stephaine Cohen 4',
    desc: 'VP and Senior Benefits Broker',
  },
  {
    id: 6,
    image: '/images/HomeSlider/three.png',
    text1: 'MultiGen',
    name: 'Bob Goff 5 ',
    desc: 'Estate Planning Attorney',
  },
  {
    id: 7,
    image: '/images/HomeSlider/four.png',
    text1: 'CashStream',
    name: 'Stephaine Cohen 6',
    desc: 'VP and Senior Benefits Broker',
  },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
