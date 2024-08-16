import { Section1, Section2, Section3 } from '@/components';
import React, { useState } from 'react';

const EstimateBenefits = () => {
  const [tabber, setTabber] = useState(3);
  return (
    <div className="bg-white p-7 rounded-20">
      <div className="flex items-center justify-between ">
        <h1 className="font-outfit font-semibold text-[30px] text-[#12171B]">
          Estimate My Benefits
        </h1>
        <div className="bg-primary-300 flex items-center justify-between p-2 rounded-[50px] ">
          <div className="px-4 py-[6px] bg-primary-100 para-18 rounded-[50px] flex-center">
            <span className="text-white">Quick Estimate</span>
          </div>
          <div className="px-4 py-[6px]  para-18 rounded-[50px] flex-center">
            <span>Detailed Estimate</span>
          </div>
        </div>
      </div>
      <div className="flex-center my-8">
        <div className="shadow-primary border-primary rounded-20 w-2/5 px-9 py-7">
          <div className="flex flex-col gap-4 mb-10">
            <label
              className="font-inter font-semibold text-18 text-primary-400"
              htmlFor=""
            >
              Gender
            </label>
            <select
              className="para-18 bg-primary-300 py-[10px] px-5  rounded-[10px] outline-none"
              name=""
              id=""
            >
              <option className="border-none" value="">
                Male
              </option>
              <option value="">Female</option>
            </select>
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label
              className="font-inter font-semibold text-18 text-primary-400"
              htmlFor="Age"
            >
              Annual Contribution Amount
            </label>
            <input type="range" min="1" max="100" />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label
              className="font-inter font-semibold text-18 text-primary-400"
              htmlFor="Age"
            >
              Age
            </label>
            <input type="range" min="1" max="100" />
          </div>
          <p className="para-18 mt-10 mb-5">
            The minimum annual contribution required is $18,850 based on the age
            selected. For a specific contribution amount please use the custom
            design tool.
          </p>
          <div className="flex justify-end">
            <button className="blue-btn">Calculate Again</button>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-5 ">
        <h1 className="text-center head-30">Quick Estimation Results </h1>
        <p className="text-center para-18 my-2">
          Annual Contribution Amount: <span>$45,000</span>
        </p>
      </div>

      <div className="mb-5 bg-primary-300 flex items-center justify-between p-2 rounded-[50px] max-w-[680px] mx-auto cursor-pointer">
        <div
          onClick={() => setTabber(1)}
          className={`${
            tabber === 1 && 'text-white bg-primary-100'
          } px-4 py-2  para-18 rounded-[50px] flex-center`}
        >
          <p className="font-inter font-semibold">1. Contribution Totals </p>
        </div>
        <div
          onClick={() => setTabber(2)}
          className={`${
            tabber === 2 && 'text-white bg-primary-100'
          } px-4 py-2  para-18 rounded-[50px] flex-center`}
        >
          <p className="font-inter font-semibold">
            2. Benefits & Distributions{' '}
          </p>
        </div>
        <div
          onClick={() => setTabber(3)}
          className={`${
            tabber === 3 && 'text-white bg-primary-100'
          } px-4 py-2  para-18 rounded-[50px] flex-center`}
        >
          <p className="font-inter font-semibold">3. Comparison</p>
        </div>
      </div>

      {tabber === 1 ? <Section1 /> : tabber === 2 ? <Section2 /> : <Section3 />}

      <div className="border-t border-[#EDEAEA] py-4">
        <p className="para-14 font-semibold">
          Assumptions Used Kaizan® and Alternative Choices
        </p>
        <p className="para-14">
          Lörem ipsum vasick salig polyrat ben. Nyns hypogen yn. Du kan vara
          drabbad. Lörem ipsum vasick salig polyrat ben. Nyns hypogen yn. Du kan
          vara drabbad. Lörem ipsum vasick salig polyrat ben. Nyns hypogen yn.
          Du kan vara drabbad. Lörem ipsum vasick salig polyrat ben. Nyns
          hypogen yn. Du kan vara drabbad.
        </p>
      </div>
    </div>
  );
};

export default EstimateBenefits;
