import { NavigationBtn, Tabber } from '@/components';
import { NavbarTwo } from '@/containers/pageListAsync';
import { reactIcons } from '@/utils/icons';
import React from 'react';

const ques = [
  {
    ques: 'I Am Not Accumulating Enough Funds As I Age',
  },
  {
    ques: 'Medical Emergencies Could Wipe Out My Savings',
  },
  {
    ques: 'I Am Not Accumulating Enough Funds As I Age',
  },
  {
    ques: 'Medical Emergencies Could Wipe Out My Savings',
  },
  {
    ques: 'I Am Not Accumulating Enough Funds As I Age',
  },
  {
    ques: 'Medical Emergencies Could Wipe Out My Savings',
  },
  {
    ques: 'I Am Not Accumulating Enough Funds As I Age',
  },
  {
    ques: 'Medical Emergencies Could Wipe Out My Savings',
  },
  {
    ques: 'I Am Not Accumulating Enough Funds As I Age',
  },
  {
    ques: 'Medical Emergencies Could Wipe Out My Savings',
  },
];

const Financial = () => {
  return (
    <>
      <NavbarTwo />
      <Tabber />
      <section className="my-10 lg:container mx-2">
        <h1 className="head-30 my-10">Financial Solution</h1>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div>
            <div className="">
              <img src="/images/Intro/intro.png" alt="" />
            </div>
          </div>
          <div className="w-full ">
            <h2 className="para-16 text-20 pb-6">
              What are your financial Concerns?
            </h2>
            <div className="flex flex-col gap-5 w-full h-[360px] overflow-y-auto">
              {ques.map((item, index) => (
                <div
                  className="bg-[#F5F7FF] flex items-center  px-6 py-3 w-full border-primary rounded-lg"
                  key={index}
                >
                  <p className="para-bold-18">{item.ques}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="head-30 text-center mt-10">Problem:</h2>
        <h2 className="head-30 text-center my-5">
          What is American&apos;s Greatest Financial Fears?
        </h2>
        <p className="para-18 text-center">
          Many Americans fear unplanned financial emergencies and the inability
          to retire comfortably.
        </p>
        <p className="para-18 text-center">
          Source: (Northwestern Mutual’s 2015 Planning and Progress Study
          surveyed.)
        </p>

        <div className="my-5 bg-[#28E19F1A] border-primary rounded-20 p-8 max-w-[940px] mx-auto">
          <h2 className="head-30 text-center ">Solution:</h2>
          <h2 className="head-30 font-medium text-center my-5">
            What is American&apos;s Greatest Financial Fears?
          </h2>
          <p className="para-18">
            Kai-Zen® combines Leverage with a cash accumulation Life Insurance
            policy providing you with:
          </p>
          <div className="flex items-center gap-5 my-5">
            <p className="text-[#28E19F]">{reactIcons.check}</p>
            <p className="para-18">
              Protection in the event of a medical emergency or untimely death.
            </p>
          </div>
          <div className="flex items-center gap-5 my-5">
            <p className="text-[#28E19F]">{reactIcons.check}</p>
            <p className="para-18">
              Potential for growth to help supplement your income.
            </p>
          </div>
          <div className="flex items-center gap-5 my-5">
            <p className="text-[#28E19F]">{reactIcons.check}</p>
            <p className="para-18">
              Additional money added to what you are currently accumulating,
              providing you the ability to contribute enough to make a
              meaningful difference to your financial future.
            </p>
          </div>
        </div>
      </section>
      <NavigationBtn />
    </>
  );
};

export default Financial;
