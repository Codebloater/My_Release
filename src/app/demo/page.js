"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ethereum } from "@/assets/blockchains";
import LoadingGIF from "@/assets/Loading.gif";
import { AiFillCheckCircle } from "react-icons/ai";
import { allDexs } from "./constants/Variables";
import { CiSearch } from "react-icons/ci";
import { query } from "./constants/Query";
import PoolCard from "./components/PoolCard";

const Demo = () => {
  // ----- USESTATE DECLARATIONS -----
  const [currentDex, setCurrentDex] = useState(0);
  const [currentDexInfo, setCurrentDexInfo] = useState(0);
  const [currentDexContent, setCurrentDexContent] = useState([]);
  const [dexBannerData, setDexBannerData] = useState(0);
  const [isSearchEnabled, setIsSearchEnabled] = useState(true);
  const [poolSearchState, setPoolSearchState] = useState("");

  // ----- USEFFECT HOOK DECLARATIONS -----
  useEffect(() => {
    let fetchData = async () => {
      dexContentNavHeading[currentDexInfo].content();
    };

    fetchData();
  }, [currentDexInfo, currentDex]);

  // ----- FUNCTIONS DECLARATIONS -----
  //~ ----- fetchLiquidityPool -----
  const fetchLiquidityPool = async () => {
    //here id is Pool Address

    let allData = [];
    let totalPoolCount = 0;

    try {
      let response = await axios.post(allDexs[currentDex].graphQlEndpoint, {
        query: query
      });

      allData = response.data.data.pools;
      totalPoolCount = response.data.data.factories[0].poolCount;
    } catch (error) {
      console.log("fetchLiquidityPool", error);
    }

    setCurrentDexContent(allData);
    setIsSearchEnabled(false);
    setDexBannerData(totalPoolCount);
  };

  //~ ----- handleOnSearchPool -----
  const handleOnSearchPool = (e) => {
    setPoolSearchState(e.target.value);

    if (e.target.value === "") {
      fetchLiquidityPool();
    }

    let targetPool = e.target.value;
    let collectedData = [];

    let allData = currentDexContent;
    allData.forEach((element) => {
      if (element.id === targetPool) {
        collectedData.push(element);
      }
    });

    setCurrentDexContent(collectedData);
  };

  const dexContentNavHeading = [
    { name: "Liquidity Pools", content: fetchLiquidityPool }
  ];

  return (
    <div className="flex min-h-screen flex-col gap-3 mx-4">
      {/* --------- DEX NAVBAR SECTION --------- */}
      <div className=" w-full h-fit flex justify-start py-3 gap-4 border-b-[0.5px] border-opacity-60 border-gray-300  items-center">
        <div className="border-r-[0.5px] pr-5 border-opacity-60 border-gray-300">
          <Image
            className="p-1 rounded-md border-[1px] bg-white"
            src={ethereum}
            width={30}
            height={30}
            alt="Blockchain Logo"
          />
        </div>
        {allDexs.map((element, index) => (
          <div key={index + 1}>
            <button
              className={`${
                currentDex === index
                  ? "flex justify-center items-center"
                  : "flex justify-center items-center opacity-30"
              }`}
              onClick={() => setCurrentDex(index)}
            >
              <Image src={element.icon} width={30} height={30} alt="Dex Logo" />
            </button>
          </div>
        ))}
      </div>
      {/* --------- DEX CONTENT HEADER SECTION --------- */}
      <div className=" w-full h-fit flex justify-start text-black items-center">
        {/* DEX BANNER SECTION */}
        <div className="flex flex-col gap-3 w-full h-fit">
          <h2 className="text-3xl">Overview</h2>
          {/* DEX BANNER IMAGE & INFO SECTION */}
          <div className="flex justify-between items-center">
            {/* DEX BANNER IMAGE & INFO LEFT SECTION */}
            <div className="flex justify-start items-center gap-5">
              <Image
                src={allDexs[currentDex].icon}
                width={100}
                height={100}
                alt="Dex Logo"
              />
              <div className="flex flex-col gap-2">
                <div className="flex justify-start items-center gap-1">
                  <h2 className="text-lg font-bold">
                    {allDexs[currentDex].name}
                  </h2>
                  <AiFillCheckCircle className="text-green-400" size={16} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black text-sm">
                    {allDexs[currentDex].about}
                  </p>
                  <div className="text-gray-500 text-opacity-70 font-semibold text-xs flex justify-start items-center gap-1">
                    Total Pools:
                    {dexBannerData === 0 ? (
                      <p>Loading...</p>
                    ) : (
                      <p>{dexBannerData}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* DEX BANNER IMAGE & INFO RIGHT SECTION */}
            <div className="">1</div>
          </div>
        </div>
      </div>
      {/* --------- DEX CONTENT NAVBAR SECTION --------- */}
      <div className="w-full h-fit border-b-[0.5px] border-opacity-60 py-3 border-gray-500 flex justify-between items-center">
        <div className=" w-full h-fit flex justify-start items-center gap-5">
          {dexContentNavHeading.map((element, index) => (
            <button
              onClick={() => {
                setCurrentDexInfo(index);
              }}
              className=""
              key={index + 1}
            >
              <h2
                className={`${
                  currentDexInfo === index
                    ? "text-black text-xs"
                    : "text-gray-300 text-xs text-opacity-40"
                }`}
              >
                {element.name}
              </h2>
            </button>
          ))}
        </div>
      </div>
      {/* --------- DEX CONTENT NAVBAR CONTENT SECTION --------- */}
      <div className=" min-h-full rounded-md flex flex-col gap-3 w-full ">
        {/* --------- DEX CONTENT NAVBAR CONTENT SEARCH FILTERS SECTION --------- */}
        <div className="flex justify-between items-center">
          <div className=" bg-gray-200 bg-opacity-30 flex justify-start items-center gap-1 py-1 px-2 w-2/12 rounded-md">
            <CiSearch className="text-black" size={18} />
            <input
              disabled={isSearchEnabled}
              className="bg-transparent text-black placeholder:font-normal w-full rounded-md text-sm font-thin focus:outline-none"
              placeholder="Enter Pool Address"
              onChange={(e) => handleOnSearchPool(e)}
              value={poolSearchState}
            />
          </div>
        </div>
        {/* --------- DEX CONTENT NAVBAR CONTENT SECTION --------- */}
        <div className="max-h-[650px] w-full grid grid-cols-4 gap-5 overflow-y-scroll text-white">
          {currentDexContent.length === 0 ? (
            <div className="flex justify-center col-span-4 items-center w-full h-[700px]">
              <Image
                src={LoadingGIF}
                width={300}
                height={300}
                alt="Loading GIF"
              />
            </div>
          ) : (
            currentDexContent.map((element, index) => (
              <PoolCard key={index + 1} element={element} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
