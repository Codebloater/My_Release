import React from "react";
import Link from "next/link";

const PoolCard = ({ element }) => {
  return (
    <div className="flex flex-col gap-3 p-2 w-auto h-auto bg-white shadow-sm rounded-md ">
      {/* --------- POOL HEADING SECTION --------- */}
      <div className="flex justify-between  items-center">
        <h2 className="text-base text-black font-semibold">
          {element.token0.symbol}/{element.token1.symbol}
        </h2>
        <p className="text-xs font-bold text-black">{element.feeTier}</p>
      </div>
      <h2 className="text-xs text-black">{element.id}</h2>
      {/* --------- POOL TOKEN0 SECTION --------- */}
      <div className="flex flex-col gap-1  bg-blue-600 bg-opacity-10 border-l-2 border-blue-600 rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none rounded-md p-2">
        <p className="text-sm font-semibold text-black ">
          {element.token0.name}
        </p>
        <p className="text-xs text-gray-400">
          TotalSupply: {element.token0.totalSupply}
        </p>
        <p className="text-xs text-gray-400">
          TVL: {element.totalValueLockedToken0}
        </p>
      </div>
      {/* --------- POOL TOKEN1 SECTION --------- */}
      <div className="flex flex-col gap-1 bg-green-600 bg-opacity-10 border-l-2 border-green-600 rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none p-2">
        <p className="text-sm font-semibold text-black">
          {element.token1.name}
        </p>
        <p className="text-xs text-gray-400">
          Total Supply: {element.token1.totalSupply}
        </p>
        <p className="text-xs text-gray-400">
          TVL: {element.totalValueLockedToken1}
        </p>
      </div>
      {/* --------- POOL ETHERSCAN INFORMATION SECTION --------- */}
      <div className="text-black flex justify-start items-center">
        <Link
          href={`https://etherscan.io/address/${element.id}`}
          className="text-xs w-fit h-fit flex justify-center gap-2 items-center rounded-md border-[1px] py-[0.5px] px-2 hover:border-black"
        >
          <p>Info</p>
        </Link>
      </div>
    </div>
  );
};

export default PoolCard;
