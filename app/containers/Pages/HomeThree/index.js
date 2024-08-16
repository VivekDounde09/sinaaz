import { Loading } from '@/components';
import { fetchBenefitsData } from '@/redux/Slices/Benefits/benefits';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomeThree = () => {
  const videoUrl = process.env.API_URL.split('/api')[0];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { heroSections, loading } = useSelector((state) => state.hero);
  const { benefits, isLoading } = useSelector((state) => state.benefits);
  useEffect(() => {
    dispatch(fetchBenefitsData());
  }, [dispatch]);

  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[660px] ">
          <h1 className="text-center py-5 head-40 ">
            {isLoading ? <Loading /> : benefits?.attributes?.headingOne}
          </h1>
          <p className="text-center para-18">
            {isLoading ? <Loading /> : benefits?.attributes?.subheadingOne}
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex  overflow-x-auto gap-10 py-10">
        {isLoading ? (
          <Loading />
        ) : (
          benefits?.attributes?.why?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[345px] flex-none lg:w-auto bg-gradient-to-r from-[#F9FAFE] to-[#FCFBFF] rounded-20 p-9"
              >
                <div className="bg-[#D1D9F8] w-16 h-16 rounded-full flex-center p-3">
                  <img className=" object-cover" src={item?.url} alt="" />
                </div>
                <h2 className="py-5 text-[#12171B] font-outfit font-semibold text-24">
                  {item?.heading}
                </h2>
                <p className="para-18">{item?.subheading}</p>
              </div>
            );
          })

          // ------------------------

          // benefits?.attributes?.why?.map((item, index) => (
          //   <div
          //     key={index}
          //     className="w-[345px] flex-none lg:w-auto bg-gradient-to-r from-[#F9FAFE] to-[#FCFBFF] rounded-20 p-9"
          //   >
          //     <div className="bg-[#D1D9F8] w-16 h-16 rounded-full flex-center p-3">
          //       <img className=" object-cover" src={item?.icon} alt="" />
          //     </div>
          //     <h2 className="py-5 text-[#12171B] font-outfit font-semibold text-24">
          //       {item?.heading}
          //     </h2>
          //     <p className="para-18">{item?.subheading}</p>
          //   </div>
          // ))
        )}
      </div>
      <div className="flex-center pb-10">
        <button
          className="blue-btn"
          onClick={() => {
            navigate('/intro');
          }}
        >
          Learn With FREE Course
        </button>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
          <h1 className="head-40  pb-10">
            {loading ? (
              <Loading />
            ) : (
              heroSections.data &&
              heroSections?.data &&
              heroSections?.data[0]?.attributes?.heading
            )}
          </h1>
          <p className="para-18 lg:text-left text-center">
            {loading ? (
              <Loading />
            ) : (
              heroSections.data && heroSections?.data[0]?.attributes?.subheading
            )}
          </p>
          <div className=" py-10">
            <button
              className="blue-btn"
              onClick={() => {
                navigate('/intro');
              }}
            >
              {' '}
              Learn With FREE Course
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          {loading ? (
            <Loading />
          ) : (
            <video className="image rounded-20" width="600" controls>
              <source
                src={
                  heroSections.data &&
                  videoUrl +
                    heroSections.data[1]?.attributes.videos.data[0]?.attributes
                      ?.url
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#F9FAFE] to-[#FCFBFF] rounded-[50px] lg:p-10 lg:pr-32 my-10 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img src="/images/Home3/image8.png" alt="" />
        </div>
        <div className="lg:w-1/2  leading-[50px]">
          <h1 className="head-40  lg:text-left text-center">
            {isLoading ? <Loading /> : benefits?.attributes?.headingTwo}
          </h1>
          <p className="para-18 py-5 lg:text-left text-center">
            {isLoading ? <Loading /> : benefits?.attributes?.subheadingTwo}
          </p>
          {isLoading ? (
            <Loading />
          ) : (
            benefits?.attributes?.benefits?.map((item, index) => (
              <div className="" key={index}>
                <h2 className="head-24 pb-4 lg:text-left text-center mt-5">
                  {item.heading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {item?.points?.map((data, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full flex-none">
                        <img
                          className="image"
                          src="/images/Home3/check.png"
                          alt=""
                        />
                      </div>
                      <p className="para-18">{data}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeThree;
