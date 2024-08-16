import React from 'react';

const tableData1 = [
  {
    head: 'Index Life with Kai-Zen® Leverage',
    data: [
      { title: 'Potential Annual Distribution', amount: '$492,000' },
      {
        title: 'Total Potential Distributions Taken from Ages',
        amount: '$492,000',
      },
      { title: 'IRR Calculations', amount: '7.8%' },
    ],
  },
  {
    head: 'Index Life without Leverage',
    data: [
      { title: 'Potential Annual Distribution', amount: '$492,000' },
      {
        title: 'Total Potential Distributions Taken from Ages',
        amount: '$492,000',
      },
      { title: 'IRR Calculations', amount: '$492,000' },
    ],
  },
  {
    head: 'After Tax Investment',
    data: [
      { title: 'Potential Annual Distribution', amount: '$492,000' },
      {
        title: 'Total Potential Distributions Taken from Ages',
        amount: '$492,000',
      },
      { title: 'IRR Calculations', amount: '$492,000' },
    ],
  },
  {
    head: 'Tax-Deferred Investment',
    data: [
      { title: 'Potential Annual Distribution', amount: '$492,000' },
      {
        title: 'Total Potential Distributions Taken from Ages',
        amount: '$492,000',
      },
      { title: 'IRR Calculations', amount: '$492,000' },
    ],
  },
];

const tableData2 = [
  {
    head: 'Index Life with Kai-Zen® Leverage',
    data: [
      { title: 'Initial Death Benefit', amount: '$492,000' },
      {
        title: 'Death Benefit Remaining At Age 90 After Distribution',
        amount: '$492,000',
      },
    ],
  },
  {
    head: 'Index Life without Leverage',
    data: [
      { title: 'Initial Death Benefit', amount: '$492,000' },
      {
        title: 'Death Benefit Remaining At Age 90 After Distribution',
        amount: '$492,000',
      },
    ],
  },
  {
    head: 'After Tax Investment',
    data: [
      { title: 'Initial Death Benefit', amount: '$492,000' },
      {
        title: 'Death Benefit Remaining At Age 90 After Distribution',
        amount: '$492,000',
      },
    ],
  },
  {
    head: 'Tax-Deferred Investment',
    data: [
      { title: 'Initial Death Benefit', amount: '$492,000' },
      {
        title: 'Death Benefit Remaining At Age 90 After Distribution',
        amount: '$492,000',
      },
    ],
  },
];

const Section3 = () => {
  return (
    <section>
      {/* <div className="flex justify-end gap-4">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#ECB339]"></span>
          <p className="para-14">Potential Death Benefit</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#3871EC]"></span>
          <p className="para-14">Potential Policy or Other Distributions</p>
        </div>
      </div> */}
      <div className="mx-5">
        <img
          className="h-full w-full object-cover"
          src="/images/Create/graph.png"
          alt=""
        />
      </div>

      <h2 className="head-24 my-10 text-center">
        Full comparison details between Kai-Zen® and alternatives
      </h2>
      <div className="hidden md:block w-full">
        <table className="w-full text-center ">
          <thead>
            <tr className="">
              <td></td>
              <td className="table-head   ">
                Index Life with Kai-Zen® Leverage
              </td>
              <td className="table-head   ">Index Life without Leverage</td>
              <td className="table-head   ">After Tax Investment </td>
              <td className="table-head  ">Tax-Deferred Investment</td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#F3F6FF]">
              <td className="head-bold w-[400px] p-5 text-left rounded-tl-[10px]">
                Potential Distribution for Age 65-90
              </td>
              <td className=""></td>
              <td className="table-head   "></td>
              <td className="table-head   "></td>
              <td className="table-data rounded-tr-[10px]"></td>
            </tr>
            <tr className="bg-[#F3F6FF]">
              <td className="table-left py-2">Potential Annual Distribution</td>
              <td className="table-data  ">$492,000</td>
              <td className="table-data   ">$492,000</td>
              <td className="table-data   ">$492,000</td>
              <td className="table-data ">$492,000</td>
            </tr>
            <tr className="bg-[#F3F6FF] border-y border-[#0000000D] ">
              <td className="table-left py-2">
                Total Potential Distributions Taken from Ages
              </td>
              <td className="table-data  ">$492,000</td>
              <td className="table-data   ">$492,000</td>
              <td className="table-data   ">$492,000</td>
              <td className="table-data ">$492,000</td>
            </tr>
            <tr className="bg-[#F3F6FF]">
              <td className="table-left py-2 rounded-bl-[10px]">
                IRR Calculations
              </td>
              <td className="table-data ">7.8% </td>
              <td className="table-data   ">7.8%</td>
              <td className="table-data   ">7.8%</td>
              <td className="table-data rounded-br-[10px] ">7.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hidden md:block w-full my-[10px]">
        <table className="w-full text-center ">
          <tbody className="">
            <tr className="bg-[#FCF8EF]">
              <td className="head-bold  w-[400px] text-left p-5 rounded-tl-[10px] ">
                Potential Protections
              </td>
              <td className=""></td>
              <td className="table-head   "></td>
              <td className="table-head   "></td>
              <td className="table-data rounded-tr-[10px]"></td>
            </tr>
            <tr className="bg-[#FCF8EF] border-b border-[#0000000D] ">
              <td className="table-left py-2 ">Initial Death Benefit</td>
              <td className="table-data ">$492,000</td>
              <td className="table-data   ">$492,000</td>
              <td className="table-data   ">$492,000</td>
              <td className="table-data  ">$492,000</td>
            </tr>
            <tr className="bg-[#FCF8EF]">
              <td className="table-left py-2  rounded-bl-[10px]">
                Death Benefit Remaining At Age 90 After Distribution
              </td>
              <td className="table-data ">7.8%</td>
              <td className="table-data   ">7.8%</td>
              <td className="table-data   ">7.8%</td>
              <td className="table-data rounded-br-[10px]">7.8%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="md:hidden mx-2 mb-10">
        <h1 className="head-24 mb-5">Potential Distribution for Age 65-90</h1>

        {tableData1.map((item, index) => (
          <div key={index}>
            <h2 className="para-18 font-semibold my-5">{item.head}</h2>
            <table className="rounded-20 w-full">
              {item.data.map((row, i) => (
                <tr className="bg-[#F3F6FF]" key={i}>
                  <td className="para-18 text-16 py-3 pl-3">{row.title}</td>
                  <td className="para-18 pr-3">{row.amount}</td>
                </tr>
              ))}
            </table>
          </div>
        ))}
      </div>

      <div className="md:hidden mx-2">
        <h1 className="head-24 mb-5">Potential Protections </h1>

        {tableData2.map((item, index) => (
          <div key={index}>
            <h2 className="para-18 font-semibold my-5">{item.head}</h2>
            <table className="rounded-20 w-full">
              {item.data.map((row, i) => (
                <tr className="bg-[#FCF8EF]" key={i}>
                  <td className="para-18 text-16 py-3 pl-3">{row.title}</td>
                  <td className="para-18 pr-3">{row.amount}</td>
                </tr>
              ))}
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
