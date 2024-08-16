import { reactIcons } from '@/utils/icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FaqCard = ({ data }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      onClick={() => setHidden(!hidden)}
      className="mb-5 bg-gradient-to-b from-[#F9FAFE] to-[#FCFBFF] rounded-20 relative px-9 py-6"
    >
      <button
        className={`absolute top-6 right-10 text-xl ${!hidden && 'rotate-180'}`}
      >
        {reactIcons.shortDown}
      </button>

      <div className="w-[95%] head-24 pb-5 cursor-pointer">
        {data?.question}
      </div>
      <div className={`${hidden && 'hidden'}  para-18`}>{data?.answer}</div>
    </div>
  );
};

FaqCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FaqCard;
