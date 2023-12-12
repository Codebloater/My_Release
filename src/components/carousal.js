import React from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Carousal = ({ dex }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">
        {dex.map((el, i) => (
          <div key={i + 1} className="text-white w-screen bg-green-300">
            {el.name}
            <Image src={el.icon} width={400} />
          </div>
        ))}
      </div>
      <div className="absolute top-0  w-full h-full flex justify-between items-center">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Carousal;
