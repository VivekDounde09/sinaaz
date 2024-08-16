import { FaqCard } from '@/components';
import { getReq } from '@/utils/apiHandlers';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const HomeFaq = () => {
  const [faqData, setFaqData] = useState();
  const navigate = useNavigate();
  const getFaqData = async () => {
    try {
      const res = await getReq('/askeds');
      const { data, status, error } = res;
      if (status) {
        setFaqData(data?.data[0]?.attributes?.asks?.data);
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
    getFaqData();
  }, []);

  return (
    <section className="container my-20">
      <div
        className="flex-center h-[400px] md:h-[516px] faq-bg w-full md:rounded-[50px] bg-[#00000033] bg-opacity-20 cursor-pointer"
        onClick={() => {
          navigate('/intro');
        }}
      >
        <img className="bg-[#00000033] bg-opacity-20" src="/images/" alt="" />
      </div>

      <div className="my-10 lg:px-20">
        <h1 className="text-center head-40 mb-10">{faqData?.heading}</h1>
        <div>
          {faqData?.questions?.map((item, index) => (
            <FaqCard key={index} data={item} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-5 my-10">
          <h1 className="text-[#1C1B1B] text-center font-bold text-24 font-poppins">
            {faqData?.finalHeading}
          </h1>
          <button className="blue-btn">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
