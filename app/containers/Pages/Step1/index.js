import { Loading, NavigationBtn, Tabber } from '@/components';
import { NavbarTwo } from '@/containers/pageListAsync';
import { fetchIntroductionData } from '@/redux/Slices/Introduction/introduction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Step1 = () => {
  const dispatch = useDispatch();
  const { introduction, isLoading } = useSelector((state) => state);
  const [videoUrl, setVideoUrl] = useState('');
  const [defaultUrl, setDefaultUrl] = useState('');

  useEffect(() => {
    dispatch(fetchIntroductionData());
  }, [dispatch]);

  const handleClick = (item) => {
    if (item?.url) {
      setVideoUrl(item?.url);
    }
  };
  useEffect(() => {
    if (introduction?.introdcutions?.attributes) {
      setDefaultUrl(introduction?.introdcutions?.attributes?.Plan[0]?.url);
    }
  }, [defaultUrl, introduction.introdcutions]);
  return (
    <>
      <NavbarTwo />
      <Tabber />
      <section className="my-10 mx-2 lg:mx-auto lg:container">
        <h1 className="head-30 my-10">
          {introduction?.introdcutions?.attributes &&
            introduction?.introdcutions?.attributes?.Heading}
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
                  key={videoUrl || defaultUrl}
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={videoUrl || defaultUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {/* {isLoading ? (
                <Loading />
              ) : videoUrl ? (
                <video
                  className="image rounded-20"
                  width="600"
                  key={videoUrl}
                  controls
                  autoPlay
                  loop
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <video
                  className="image rounded-20"
                  width="600"
                  key={defaultUrl}
                  controls
                  autoPlay
                  loop
                >
                  <source src={defaultUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )} */}
              <div className=" py-5">
                <p className="para-18 ">
                  {introduction?.introdcutions?.attributes &&
                    introduction?.introdcutions?.attributes?.Points[0]}
                </p>
                <p className="para-18 py-4">
                  {introduction?.introdcutions?.attributes &&
                    introduction?.introdcutions?.attributes?.Points[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="para-16 text-20 pb-6">Browse Chapter Plan</h2>
            <div className="flex flex-col gap-5 w-full">
              {introduction?.introdcutions?.attributes &&
                introduction?.introdcutions?.attributes?.Plan.map(
                  (item, index) => (
                    <div
                      className="bg-[#F5F7FF] flex items-center justify-between px-6 py-3 w-full border-primary rounded-lg cursor-pointer"
                      key={index}
                      onClick={() => {
                        handleClick(item);
                      }}
                    >
                      <p className="para-bold-18 cursor-pointer">
                        {item?.Topic}
                      </p>
                    </div>
                  ),
                )}
            </div>
          </div>
        </div>
      </section>
      <NavigationBtn />
    </>
  );
};

export default Step1;
