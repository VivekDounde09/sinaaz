import { Loading, NavigationBtn, Tabber } from '@/components';
import React, { useEffect, useState } from 'react';
import NavbarTwo from '../NavbarTwo';
import { getChapterTwoData } from '@/utils/apiHandlers';

const CalculateNeed = () => {
  const [data, setData] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [defaultUrl, setDefaultUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchChapterTwoData = async () => {
    setIsLoading(true);
    await getChapterTwoData().then((res) => {
      if (res?.status) {
        setIsLoading(false);
        setData(res?.data.data);
      }
    });
  };
  useEffect(() => {
    fetchChapterTwoData();
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
      {/* <NavbarTwo />
      <Tabber />
      <section className="lg:container mx-2  flex flex-col md:flex-row gap-5">
        <div className="md:w-2/5 ">
          <div className="p-8 border-primary rounded-20 shadow-shadow3 ">
            <h2 className="text-[#12171B] font-semibold font-outfit text-24 py-2">
              Calculate your Needs
            </h2>
            <div className="flex flex-col my-4 gap-4">
              <label className="font-inter font-semibold text-18" htmlFor="Age">
                Age
              </label>
              <input
                type="range"
                onChange={handleChange}
                name="age"
                value={form.age}
                min="1"
                max="100"
              />
              <p className="font-inter text-18 text-center">{form.age}</p>
            </div>
            <div className="flex flex-col my-4 gap-4 mb-8">
              <label className="font-inter font-semibold text-18" htmlFor="Age">
                Annual Contribution Amount
              </label>
              <input
                type="range"
                onChange={handleChange}
                name="amount"
                value={form.amount}
                min="1"
                max="100"
              />
              <p className="font-inter text-18 text-center">{form.amount}</p>
            </div>
            <div className="flex flex-col my-4 gap-4">
              <label className="font-inter font-semibold text-18" htmlFor="Age">
                Current Retirement Savings
              </label>
              <input
                type="range"
                onChange={handleChange}
                name="savings"
                value={form.savings}
                min="1"
                max="100"
              />
              <p className="font-inter text-18 text-center">{form.savings}</p>
            </div>
            <div className="flex flex-col my-4 gap-4">
              <label className="font-inter font-semibold text-18" htmlFor="Age">
                Monthly Contribution
              </label>
              <input
                type="range"
                onChange={handleChange}
                name="contribution"
                value={form.contribution}
                min="1"
                max="100"
              />
              <p className="font-inter text-18 text-center">
                {form.contribution}
              </p>
            </div>
            <div className="flex flex-col my-4 gap-4">
              <label className="font-inter font-semibold text-18" htmlFor="Age">
                Monthly Budget in Retirement
              </label>
              <input
                type="range"
                onChange={handleChange}
                name="budget"
                value={form.budget}
                min="1"
                max="100"
              />
              <p className="font-inter text-18 text-center">{form.budget}</p>
            </div>
          </div>
          <h2 className="head-30 my-10">Learn How to Use the Calculator?</h2>
          <div>
            <img src="/images/Intro/intro2.png" alt="" />
          </div>
        </div>
        <div className="md:w-[60%]">
          <h2 className="text-[#12171B] font-semibold font-outfit text-24 py-2 mb-5">
            Retirement Savings at age 67
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="px-2 sm:px-6 py-3 bg-[#F3F9FF] border border-[#E8E8E8] rounded-lg shadow-secondary">
              <p className="font-inter text-[#12171B] font-semibold text-16 py-2 text-center">
                What you will have
              </p>
              <p className="text-center font-inter text-[#289BFF] font-semibold text-[30px] my-3">
                $935,926
              </p>
              <p className="hidden sm:block font-inter text-[#3A3939] font-normal text-14 py-2 text-center">
                See How Kai -Zen® Program can help you generate more money, See
                Details
              </p>
            </div>
            <div className="px-2 sm:px-6 py-3 bg-[#F8ECEC] border border-[#E8E8E8] rounded-lg shadow-secondary">
              <p className="font-inter text-[#12171B] font-semibold text-16 py-2 text-center">
                What you will need
              </p>
              <p className="text-center font-inter text-[#E12828] font-semibold text-[30px] my-3">
                $935,926
              </p>
              <p className="hidden sm:block font-inter text-[#3A3939] font-normal text-14 py-2 text-center">
                Kai -Zen® Program can help you generate this money, See Details
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-[#151837] rounded-[15px] flex flex-col md:flex-row items-center justify-between my-5">
            <p className="head-24 text-20 text-white text-center md:text-left mb-3 md:mb-0">
              Kai -Zen® Program can help you generate $935,926
            </p>
            <button className="blue-btn">Learn More</button>
          </div>

          <div className="bg-primary-300 flex items-center justify-between p-2 rounded-[50px] max-w-[330px] ">
            <div
              onClick={() => setView(1)}
              className={`px-4 py-[6px] ${
                view === 1 && 'bg-primary-100 text-white'
              } para-18 rounded-[50px] flex-center  cursor-pointer`}
            >
              <span className="">Graph View</span>
            </div>
            <div
              onClick={() => setView(2)}
              className={`px-4 py-[6px] ${
                view === 2 && 'bg-primary-100 text-white'
              } para-18 rounded-[50px] flex-center  cursor-pointer`}
            >
              <span>Summary View</span>
            </div>
          </div>

          {view === 1 ? (
            <div className="w-full my-10">
              <img
                className="w-full object-cover"
                src="/images/Intro/graph.png"
                alt=""
              />
            </div>
          ) : (
            <div className="md:px-7 px-2 md:py-5 py-2 border-primary rounded-20 shadow-shadow3 my-10 ">
              <h2 className="head-30 text-20 ">Summary View</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="">
                  <h2 className="para-16 my-2">What you will have </h2>
                  <div className="border-primary rounded-20 bg-[#F5F7FF] p-4">
                    <div className="flex items-center justify-between my-2">
                      <p>Total retirement savings</p>
                      <p className="para-bold-18">$935,926</p>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <p>Monthly contribution</p>
                      <p className="para-bold-18">$935,926</p>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <p>Age retirement savings runs out</p>
                      <p className="para-bold-18">$935,926</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="para-16 my-2">What you will need </h2>
                  <div className="border-primary rounded-20 bg-[#F8ECEC] p-4">
                    <div className="flex items-center justify-between my-2">
                      <p>Total retirement savings</p>
                      <p className="para-bold-18">$935,926</p>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <p>Monthly contribution</p>
                      <p className="para-bold-18">$935,926</p>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <p>Age retirement savings runs out</p>
                      <p className="para-bold-18">$935,926</p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="head-30 my-5 text-center">
                Kai -Zen® Program can help you generate $935,926
              </h2>
              <div className="flex-center">
                <button className="blue-btn">Learn More</button>
              </div>
            </div>
          )}

          <div className="px-6 py-4 bg-[#F5F7FF] rounded-[15px] flex flex-col md:flex-row items-center justify-between my-5">
            <p className="head-24 text-center md:text-left md:my-0 my-3 text-20 text-[#12171B]">
              Kai -Zen® Program can help you generate $935,926
            </p>
            <button className="blue-btn">Learn More</button>
          </div>
          <h2 className="head-30 my-5">
            How this retirement calculator works?
          </h2>
          <p className="para-18">
            Lörem ipsum köttklister gassa, heteron. Bior. Autolingar elig susa
            delig. Favis por. Dinas tengar. Flexidaritet autopylogi då
            nitrektiga post-it-krig. Exonasade anatologi gåd. Monodade
            kontrarebel om fys. Monos disär dinäs, ev liksom dekar. Kontraskade
            sovasm prevåhosa, i våsk fyfånde. Titt trebar teling. Tepygt pogon
            och beska, såjasa. Dilig babelt. Paralar oll i dill en rolig.
            Fangar. Kavis. Defan kivar pong petabyte. Tegt konvision hexaras.
            Spår krobatide. Speviv pon plafågt räddningskort i ponas. Möpare
            syns ren nabel. Krolavis rojägt, dusågen i elektrotion tysade.
            Nypysat tin. Sprita agav. Ogt är kroskap. Syvaliga ekiliga. Suheten
            trenade prose spev gejav. Tesk ol. Kront podda. Bavis våtev legåck.
            Pofora valing vorar till nytira. Vabel makrogon, niktigt, en ågen
            ol.
          </p>
        </div>
      </section>
      <NavigationBtn /> */}
    </>
  );
};

export default CalculateNeed;
