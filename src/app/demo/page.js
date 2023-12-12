"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { UniswapIcon, PancakeSwapIcon, SushiSwapIcon } from "@/assets/dexs";
import { ethereum } from "@/assets/blockchains";
import LoadingGIF from "@/assets/Loading.gif";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";

const Demo = () => {
  // ----- USESTATE DECLARATIONS -----
  const [currentDex, setCurrentDex] = useState(0);
  const [currentDexInfo, setCurrentDexInfo] = useState(0);
  const [currentDexContent, setCurrentDexContent] = useState([]);
  const [dexBannerData, setDexBannerData] = useState(0);

  // ----- USEFFECT HOOK DECLARATIONS -----
  useEffect(() => {
    let fetchData = async () => {
      dexContentNavHeading[currentDexInfo].content();
    };

    fetchData();
  }, [currentDexInfo, currentDex]);

  // ----- FUNCTIONS DECLARATIONS -----
  const fetchLiquidityPool = async () => {
    //here id is Pool Address

    let allData = [];
    let totalPoolCount = 0;

    try {
      const query = `{
        factories {
          poolCount
      }
      pools(orderBy: volumeUSD, orderDirection: desc, first: 1000){
        id
        token0 {
          name
          symbol
          totalSupply
        }
        token1 {
          name
          symbol
          totalSupply
        }
        feeTier
        totalValueLockedToken0
        totalValueLockedToken1
      }
    }`;
      let response = await axios.post(allDexs[currentDex].graphQlEndpoint, {
        query: query
      });

      allData = response.data.data.pools;
      totalPoolCount = response.data.data.factories[0].poolCount;
    } catch (error) {
      console.log(error);
    }

    setCurrentDexContent(allData);
    setDexBannerData(totalPoolCount);
  };

  // ----- CONSTANTS DECLARATIONS -----
  let allDexs = [
    {
      name: "UniSwap V3",
      about:
        "Uniswap is a decentralized protocol for automated token exchange on Ethereum.",
      icon: UniswapIcon,
      factoryContract: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
      graphQlEndpoint:
        "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"
    },
    {
      name: "PancakeSwap V3",
      about:
        "PancakeSwap is a multi-chain decentralized exchange and automated market maker protocol.",
      icon: PancakeSwapIcon,
      factoryContract: "",
      graphQlEndpoint:
        "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-eth"
    },
    {
      name: "SushiSwap V3",
      about: "A leading multi-chain DEX deployed across 30+ blockchains.",
      icon: SushiSwapIcon,
      factoryContract: "",
      graphQlEndpoint:
        "https://api.thegraph.com/subgraphs/name/sushi-v3/v3-ethereum"
    }
  ];

  let dexContentNavHeading = [
    { name: "Liquidity Pools", content: fetchLiquidityPool }
  ];

  return (
    <div className="flex min-h-screen flex-col gap-3 mx-4">
      {/* --------- DEX NAVBAR SECTION --------- */}
      <div className=" w-full h-fit flex justify-start py-3 gap-4 border-b-[0.5px] border-opacity-60 border-gray-500  items-center">
        <div className="border-r-[0.5px] pr-5 border-opacity-60 border-gray-300">
          <Image
            className="p-1 rounded-md border-[0.25px] bg-white"
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
                  : "flex justify-center items-center opacity-60"
              }`}
              onClick={() => setCurrentDex(index)}
            >
              <Image src={element.icon} width={30} height={30} alt="Dex Logo" />
            </button>
          </div>
        ))}
      </div>
      {/* --------- DEX CONTENT HEADER SECTION --------- */}
      <div className=" w-full h-fit flex justify-start text-white items-center">
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
                  <p className="text-white text-sm">
                    {allDexs[currentDex].about}
                  </p>
                  <div className="text-white text-opacity-70 font-semibold text-xs flex justify-start items-center gap-1">
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
            {/*<div></div> */}
          </div>
        </div>
      </div>
      {/* --------- DEX CONTENT NAVBAR SECTION --------- */}
      <div className="w-full h-fit border-b-[0.5px] border-opacity-60 py-3 border-gray-500 flex justify-between items-center">
        <div className="text-white w-full h-fit flex justify-start items-center gap-5">
          {dexContentNavHeading.map((element, index) => (
            <button
              onClick={async () => {
                setCurrentDexInfo(index);
              }}
              className=""
              key={index + 1}
            >
              <h2
                className={`${
                  currentDexInfo === index
                    ? "text-white text-xs"
                    : "text-white text-xs text-opacity-40"
                }`}
              >
                {element.name}
              </h2>
            </button>
          ))}
        </div>
      </div>
      {/* --------- DEX CONTENT NAVBAR CONTENT SECTION --------- */}
      <div className=" min-h-full rounded-md flex justify-center items-center w-full ">
        <div className="max-h-[700px] w-full grid grid-cols-4 gap-5 overflow-y-scroll text-white">
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
              <div
                key={index + 1}
                className="flex flex-col gap-3 p-2 bg-[#191D1F] rounded-md"
              >
                {/* --------- POOL HEADING SECTION --------- */}
                <div className="flex justify-between  items-center">
                  <h2 className="text-base font-light">
                    {element.token0.symbol}/{element.token1.symbol}
                  </h2>
                  <p className="text-xs font-bold">{element.feeTier}</p>
                </div>
                <h2 className="text-xs">{element.id}</h2>
                {/* --------- POOL TOKEN0 SECTION --------- */}
                <div className="flex flex-col gap-1  bg-white bg-opacity-5 border-l-2 border-blue-600 rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none rounded-md p-2">
                  <p className="text-sm font-semibold">{element.token0.name}</p>
                  <p className="text-xs text-gray-400">
                    TotalSupply: {element.token0.totalSupply}
                  </p>
                  <p className="text-xs text-gray-400">
                    TVL: {element.totalValueLockedToken0}
                  </p>
                </div>
                {/* --------- POOL TOKEN1 SECTION --------- */}
                <div className="flex flex-col gap-1 bg-white bg-opacity-5 border-l-2 border-green-600 rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none p-2">
                  <p className="text-sm font-semibold">{element.token1.name}</p>
                  <p className="text-xs text-gray-400">
                    Total Supply: {element.token1.totalSupply}
                  </p>
                  <p className="text-xs text-gray-400">
                    TVL: {element.totalValueLockedToken1}
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <Link
                    href={
                      currentDex == 0
                        ? `https://info.uniswap.org/#/pools/${element.id}`
                        : `https://pancakeswap.finance/info/v3/eth/pairs/${element.id}`
                    }
                    className="py-1 px-2 bg-white flex justify-start items-center gap-2 bg-opacity-5 rounded-md"
                  >
                    <h2 className="text-xs">View more info</h2>
                    <FaArrowRight size={12} className="text-white" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
