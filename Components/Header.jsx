import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-20">
      <div className="flex justify-between items-center"></div>
      <Image
        src={assets.logo}
        width={180}
        alt="logo"
        className="w-[130px] sm:w-auto"
      />
    </div>
  );
};

export default Header;
