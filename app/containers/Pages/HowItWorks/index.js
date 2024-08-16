import { Loading, NavigationBtn, Tabber } from '@/components';
import React, { useEffect, useState } from 'react';
import NavbarTwo from '../NavbarTwo';
import { getChapterFiveData } from '@/utils/apiHandlers';

const HowItWorks = () => {
  const [data, setData] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [defaultUrl, setDefaultUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchChapterFiveData = async () => {
    setIsLoading(true);
    await getChapterFiveData().then((res) => {
      if (res?.status) {
        setIsLoading(false);
        setData(res?.data.data);
      }
    });
  };
  useEffect(() => {
    fetchChapterFiveData();
  }, []);
  useEffect(() => {
    if (data && data[0]?.attributes) {
      setDefaultUrl(data[0]?.attributes?.Plan[0]?.url);
    }
  }, [data, defaultUrl]);

  const handleClick = (item) => {
    setVideoUrl(item?.url);
  };
  return (
    <>
      <NavbarTwo />
      <Tabber />
      <section className="my-10 mx-2 lg:mx-auto lg:container">
        <h1 className="head-30 my-10">
          {data[0]?.attributes && data[0]?.attributes?.Heading}
        </h1>
        <div className="flex flex-col md:flex-row md:gap-10 w-full">
          <div className="w-full">
            <div className="w-full">
              {isLoading ? (
                <Loading />
              ) : (
                <video
                  className="image rounded-20"
                  width="600"
                  controls
                  key={videoUrl || defaultUrl}
                >
                  <source src={videoUrl || defaultUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className=" py-5">
                <p className="para-18 ">
                  {data[0]?.attributes && data[0]?.attributes?.Points[0]}
                </p>
                <p className="para-18 py-4">
                  {data[0]?.attributes && data[0]?.attributes?.Points[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="para-16 text-20 pb-6">Browse Chapter Plan</h2>
            <div className="flex flex-col gap-5 w-full">
              {data[0]?.attributes &&
                data[0]?.attributes?.Plan.map((item, index) => (
                  <div
                    className="bg-[#F5F7FF] flex items-center justify-between px-6 py-3 w-full border-primary rounded-lg cursor-pointer"
                    key={index}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    <p className="para-bold-18">{item?.Topic}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <NavigationBtn />
    </>
  );
};

export default HowItWorks;
