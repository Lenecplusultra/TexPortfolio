import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-end relative">
      {/* Background Shape Behind Image */}
      <div className="absolute bottom-0 w-[300px] h-[400px] lgl:w-[400px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-xl shadow-shadowOne z-0"></div>

      {/* Profile Image */}
      <img
        className="w-[280px] h-[380px] lgl:w-[380px] lgl:h-[480px] object-cover rounded-xl z-10"
        src={bannerImg}
        alt="Tex Yonzo"
      />
    </div>
  );
};

export default RightBanner;
