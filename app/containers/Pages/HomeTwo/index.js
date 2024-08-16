import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const HomeTwo = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  const [amount, setAmount] = useState('');
  const handleAgeChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      setAge(value);
    } else {
      setAmount(value);
    }
  };

  return (
    <div className="xl:container pt-10 mb-10 mx-5 relative grid lg:grid-cols-3 gap-10 ">
      <div className=" col-span-1   bg-[#FFFFFF]  ">
        <h2 className="text-[#12171B] font-semibold font-outfit text-24 py-2">
          Estimate your Returns
        </h2>
        <p className="font-normal font-inter text-18 leading-8">
          See if you qualify, discover your potential returns and see if
          Kai-Zen® is right for you.
        </p>
        <div className="flex flex-col my-4 gap-4">
          <label className="font-inter font-semibold text-18" htmlFor="Age">
            Age
          </label>
          <input
            onChange={handleAgeChange}
            name="age"
            value={age}
            type="range"
            min="1"
            max="100"
          />
          <p className="font-inter text-18 text-center">{age}</p>
        </div>
        <div className="flex flex-col my-4 gap-4 mb-8">
          <label className="font-inter font-semibold text-18" htmlFor="Age">
            Annual Contribution Amount
          </label>
          <input
            onChange={handleAgeChange}
            name="amount"
            value={amount}
            type="range"
            min="1"
            max="100"
          />
          <p className="font-inter text-18 text-center">
            {amount && '$' + amount}
          </p>
        </div>
        <div className="border-t border-gray-400 py-2">
          <h2 className="text-[#12171B] font-medium text-24 font-outfit py-2">
            Your Results
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-primary-400 font-semibold font-inter text-18 py-2">
              Total Internal Rate of Return
            </p>
            <p className="text-[#12171B] font-semibold font-inter text-18">
              8.25%
            </p>
          </div>
          <div className="flex justify-end gap-4">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-[#289BFF]"></span>
              <p className="para-14">Protection</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-[#42E5AB]"></span>
              <p className="para-14">Accumulation</p>
            </div>
          </div>
        </div>
        <div className="text-[#3A3939] font-inter mt-3">
          <p>
            Lörem ipsum igt nese trifiering inte egogt. Ryväv nesm fasade.
            Setreligt deliga. Lörem ipsum igt nese trifiering inte egogt. Ryväv
            nesm fasade. Setreligt deliga. Lörem ipsum igt nese trifiering inte
            egogt. Ryväv nesm fasade. Setreligt deliga. Lörem ipsum igt nese
            trifiering inte egogt. Ryväv nesm fasade. Setreligt deliga.
          </p>
        </div>
        {/* <div className="grid grid-cols-2  gap-5">
          <div className="lg:px-6 px-2 py-3 bg-[#F3F9FF] border border-[#E8E8E8] rounded-lg shadow-secondary">
            <p className="text-center font-inter text-[#289BFF] font-semibold text-22 my-3">
              $935,926
            </p>
            <p className="text-center font-inter text-[#12171B] font-semibold text-16 py-2">
              Initial death benefit
            </p>
            <p className="text-center font-inter text-[#474242] font-normal text-14">
              Starting at Age 55
            </p>
          </div>
          <div className="lg:px-6 px-2 py-3 bg-[#F2FFFB] border border-[#E8E8E8] rounded-lg shadow-secondary">
            <p className="text-center font-inter text-[#42E5AB] font-semibold text-22 my-3">
              $935,926
            </p>
            <p className="text-center font-inter text-[#12171B] font-semibold text-16 py-2">
              Initial death benefit
            </p>
            <p className="text-center font-inter text-[#474242] font-normal text-14">
              Starting at Age 55
            </p>
          </div>
          </div> */}
        {/* <div className="col-span-2 lg:px-6  px-2 py-3 border border-[#E8E8E8] rounded-lg shadow-secondary">
            <div className="flex justify-between gap-5">
              <div>
                <p className="text-center font-inter text-[#42E5AB] font-semibold text-22 my-3">
                  $935,926
                </p>
                <p className="text-center font-inter text-[#12171B] font-semibold text-16 py-2">
                  Initial death benefit
                </p>
                <p className="text-center font-inter text-[#474242] font-normal text-14">
                  Starting at Age 55
                </p>
              </div>
              <div>
                <p className="text-center font-inter text-[#42E5AB] font-semibold text-22 my-3">
                  $935,926
                </p>
                <p className="text-center font-inter text-[#12171B] font-semibold text-16 py-2">
                  Initial death benefit
                </p>
                <p className="text-center font-inter text-[#474242] font-normal text-14">
                  Starting at Age 55
                </p>
              </div>
            </div>
          </div> */}
      </div>
      <div className="flex flex-col items-center justify-between col-span-2 ">
        <div className="border border-[#D3D3D3] shadow-[0px_4px _100px_0px_#0000001A] rounded-20">
          <img
            className="h-full w-full object-cover  rounded-20"
            src="/images/Hero/Medium_Traffic.png"
            alt=""
          />
        </div>
        <div className="w-full  relative h-24">
          <div className=" absolute -top-14 ax-center grid grid-cols-2  w-full max-w-[450px] gap-5 px-5  md:px-0">
            <div className="lg:px-6 px-2 py-3 bg-[#F3F9FF] border border-[#E8E8E8] rounded-lg shadow-secondary">
              <p className="text-center font-inter text-[#289BFF] font-semibold text-22 my-3">
                $935,926
              </p>
              <p className="text-center font-inter text-[#12171B] font-semibold text-16 py-2">
                Initial death benefit
              </p>
              <p className="text-center font-inter text-[#474242] font-normal text-14">
                Starting at Age 55
              </p>
            </div>
            <div className="lg:px-6 px-2 py-3 bg-[#F2FFFB] border border-[#E8E8E8] rounded-lg shadow-secondary">
              <p className="text-center font-inter text-[#42E5AB] font-semibold text-22 my-3">
                $935,926
              </p>
              <p className="text-center font-inter text-[#12171B] font-semibold text-16 py-2">
                Initial death benefit
              </p>
              <p className="text-center font-inter text-[#474242] font-normal text-14">
                Starting at Age 55
              </p>
            </div>
          </div>
        </div>
        <div className="font-inter text-[#3A3939] mt-8 md:mt-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi
            quas
          </p>
        </div>
        <div className="flex-center pt-5 ">
          <button
            className="blue-btn"
            onClick={() => {
              navigate('/intro');
            }}
          >
            Learn More With FREE Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
