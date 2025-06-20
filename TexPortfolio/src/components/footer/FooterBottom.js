import React from 'react';

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()} Tex Yonzo. Student Developer. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBottom;
