import { SliderCard } from '@/components';
import { getReq } from '@/utils/apiHandlers';
import { reactIcons } from '@/utils/icons';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const HomeSlider = () => {
  const ref = useRef(null);
  const [sliderData, setSliderData] = useState();

  const scroll = (scrollOffset) => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + scrollOffset,
      behavior: 'smooth',
    });
  };

  const getData = async () => {
    try {
      const res = await getReq('/about-uses');
      const { data, status, error } = res;
      if (status) {
        setSliderData(data?.data[0]?.attributes);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error, 'error');
      Array.isArray(error.message)
        ? error?.message.map((msg) => toast.error(msg))
        : toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="container">
      <div className="flex justify-center">
        <div className="max-w-[620] flex flex-col items-center">
          <h1 className="head-40   text-center pt-5">{sliderData?.heading}</h1>
          <p className="para-18 text-center max-w-[500px] my-5">
            {sliderData?.subheading}
          </p>
        </div>
      </div>
      <div ref={ref} className="slider flex gap-5 overflow-x-auto">
        {sliderData?.instructor?.map((item, index) => (
          <SliderCard key={index} data={item} />
        ))}
      </div>
      <div className="fij gap-4">
        <button
          className="bg-[#D1D9F8] rounded-20 p-4 text-xl"
          onClick={() => scroll(-400)}
        >
          {reactIcons.shortLeft}
        </button>
        <button
          className="bg-[#D1D9F8] rounded-20 p-4 text-xl"
          onClick={() => scroll(400)}
        >
          {reactIcons.shortRight}
        </button>
      </div>
    </section>
  );
};

export default HomeSlider;
