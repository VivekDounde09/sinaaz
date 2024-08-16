import React from 'react';

const footerLinks = [
  {
    id: 1,
    head: 'Quick Links',
    links: [
      'Home',
      'About llia',
      'About NIW',
      'News',
      'Contact us',
      'Wire Instructions',
    ],
  },
  {
    id: 2,
    head: 'Strategies',
    links: [
      'Kai-Zen',
      'Tri-Zen',
      'Leveraged Savings Plan',
      'Enhanced Split Dollar',
      'Cash Stream',
    ],
  },
  {
    id: 3,
    head: 'Strategies',
    links: [
      'Premium Finance Rescue',
      'Life Strategies',
      'Multi-Gen',
      'Trust Revitalization',
      'Find Your Strategy',
    ],
  },
];

const Footer = () => {
  return (
    <section className="container py-10 border-t border-[#E3E3E3]">
      <div className="flex flex-col md:flex-row ">
        <div className="md:max-w-[320px]  lg:mr-5 ">
          <div className="md:block flex items-center justify-center">
            <div className="w-36 h-12">
              <img className="image" src="/images/logo.png" alt="" />
            </div>
          </div>

          <p className="my-5 md:text-left text-center">
            Lörem ipsum reaned rekle, banat. Jasminmöte betrese Lörem ipsum
            reaned rekle, banat. Jasminmöte betrese Lörem ipsum reaned rekle,
            banat. Jasminmöte betrese Lörem
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            <div className="flex-center h-10 w-10 bg-primary-300 rounded-full p-">
              <img className="h-7 w-5" src="/images/footer/fb.png" alt="" />
            </div>
            <div className="flex-center h-10 w-10 bg-primary-300 rounded-full p-">
              <img
                className="h-6 w-6"
                src="/images/footer/twitter.png"
                alt=""
              />
            </div>
            <div className="flex-center h-10 w-10 bg-primary-300 rounded-full p-">
              <img
                className="h-6 w-6"
                src="/images/footer/youtube.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-5">
          {footerLinks.map((item, index) => (
            <div
              className="flex flex-col  justify-center md:justify-start"
              key={index}
            >
              <h1 className="font-bold font-outfit text-24 text-center md:text-left ">
                {item.head}
              </h1>
              <ul className="flex flex-col gap-5 mt-7">
                {item.links.map((link, i) => (
                  <li className="text-center md:text-left" key={i}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h1 className="font-bold font-outfit text-24 mb-7 text-center md:text-left">
              Contact Us
            </h1>
            <div>
              <div className="flex items-center gap-3 mb-5  justify-center md:justify-start">
                <div className="h-10 w-10 bg-primary-300 rounded-full p-2">
                  <img
                    className="image"
                    src="/images/footer/phone.png"
                    alt=""
                  />
                </div>
                <p>support@abc.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-10 w-10 bg-primary-300 rounded-full p-2">
                  <img
                    className="image"
                    src="/images/footer/email.png"
                    alt=""
                  />
                </div>
                <p>support@abc.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
        <div>
          <p className="para-18 my-5 md:my-0 text-center md:text-left">
            Copyright © 2024 NIW | All Rights Reserved
          </p>
        </div>
        <div className="flex justify-center md:justify-start gap-5 para-18">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
