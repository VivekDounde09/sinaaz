import { Loading, RegisterModal } from '@/components';
import { Navbar } from '@/containers/pageListAsync';
import { fetchHeroSections } from '@/redux/Slices/Hero/hero';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const videoUrl = process.env.API_URL.split('/api')[0];
  const [registerModal, setRegisterModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { heroSections, loading } = useSelector((state) => state.hero);

  useEffect(() => {
    dispatch(fetchHeroSections());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="hero-section min-h-[650px] flex items-center">
        <div className="xl:container text-white grid grid-cols-1 lg:grid-cols-2 items-center  ">
          {/* <div className=" lg:hidden flex justify-center gap-2">
            <div className="flex relative min-w-[140px] ">
              <img
                className="h-12 w-12 rounded-full object-cover border-[2px] border-white z-10"
                src="https://thumbs.dreamstime.com/b/old-man-20313005.jpg"
                alt=""
              />
              <img
                className="h-12 w-12 rounded-full object-cover border-[2px] border-white absolute left-10 z-20"
                src="https://as1.ftcdn.net/v2/jpg/03/39/50/20/1000_F_339502009_uF9ZDy8K6jmWIFoQkKhSoOBi1Jr7jhlT.jpg"
                alt=""
              />
              <img
                className="h-12 w-12 rounded-full object-cover border-[2px] border-white absolute left-20 z-30"
                src="https://media.istockphoto.com/id/153011771/photo/cheerful-senior-man.jpg?s=612x612&w=0&k=20&c=BYpISz7fcryegrzbLGVv9pqu7ENRyEKw9QqMxfp4ahw="
                alt=""
              />
            </div>
            <div className="flex  gap-3">
              <p>
                <span className="font-outfit font-bold text-[25px]">
                  500k+{' '}
                </span>
                People have secure retirement with us
              </p>
            </div>
          </div> */}
          <div className=" p-5">
            <h1 className="text-center lg:text-left font-outfit font-semibold lg:text-[50px] md:text-[40px] text-[35px]  py-5 lg:leading-[60px] leading-[44px]">
              {loading ? (
                <Loading />
              ) : (
                heroSections.data && heroSections?.data[1]?.attributes?.heading
              )}
            </h1>
            <p className="text-center lg:text-left font-inter font-normal text-18 leading-7">
              {loading ? (
                <Loading />
              ) : (
                heroSections.data &&
                heroSections?.data[1]?.attributes?.subheading
              )}
            </p>
            <div className="lg:py-10 mt-5 lg:mt-0 flex gap-4 lg:justify-start justify-center">
              <button onClick={() => navigate('/intro')} className="blue-btn">
                Learn With FREE Course
              </button>
            </div>
            {/* <div className="hidden lg:flex gap-2">
              <div className="flex relative min-w-[140px]">
                <img
                  className="h-12 w-12 rounded-full object-cover border-[2px] border-white z-10"
                  src="https://thumbs.dreamstime.com/b/old-man-20313005.jpg"
                  alt=""
                />
                <img
                  className="h-12 w-12 rounded-full object-cover border-[2px] border-white absolute left-10 z-20"
                  src="https://as1.ftcdn.net/v2/jpg/03/39/50/20/1000_F_339502009_uF9ZDy8K6jmWIFoQkKhSoOBi1Jr7jhlT.jpg"
                  alt=""
                />
                <img
                  className="h-12 w-12 rounded-full object-cover border-[2px] border-white absolute left-20 z-30"
                  src="https://media.istockphoto.com/id/153011771/photo/cheerful-senior-man.jpg?s=612x612&w=0&k=20&c=BYpISz7fcryegrzbLGVv9pqu7ENRyEKw9QqMxfp4ahw="
                  alt=""
                />
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <h2 className="font-outfit font-bold text-[30px] leading-8">
                    500k+
                  </h2>
                  <p>People have secure </p>
                </div>
                <div>
                  <p>retirement with us</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex items-center justify-center ">
            <div className="max-h-[330px] max-w-[600px] m-5 lg:m-0">
              {loading ? (
                <Loading />
              ) : (
                <video className="image rounded-20" width="600" controls>
                  <source
                    src={
                      heroSections.data &&
                      videoUrl +
                        heroSections.data[0]?.attributes.videos.data[0]
                          ?.attributes?.url
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
      {registerModal && (
        <RegisterModal close={setRegisterModal} isOpen={registerModal} />
      )}
    </>
  );
};

export default Hero;
