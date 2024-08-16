import React from 'react';
import PropTypes from 'prop-types';
const SliderCard = ({ data }) => {
  return (
    <div className="min-w-[345px]">
      <div className="w-full h-[214px]">
        <video className="image rounded-20" width="600" controls>
          <source src={data?.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2 className="text-[#2B53D6] text-14 font-inter font-normal pt-3 pb-2">
        {data.project}
      </h2>
      <h1 className="font-outfit text-[#12171B] font-semibold text-20 ">
        {data.name}
      </h1>
      <p className="para-14 py-1">{data?.role}</p>
    </div>
  );
};

SliderCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SliderCard;
