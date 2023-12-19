"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { allDexs } from "@/app/demo/constants/Variables";
import { CiLocationArrow1 } from "react-icons/ci";
const {
  abi: INonfungiblePositionManagerABI
} = require("@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json");

const Positions = ({ params }) => {
  const NonfungiblePositionManager_ADDRESS =
    "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

  const [poolAddress, setPoolAddress] = useState("");
  const [fetchingPositions, setFetchingPositions] = useState(true);
  const [allFetchedData, setAllFetchedData] = useState([]);
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  const Query = ` 
  {
    positions(where: {owner: "0x78376289D3d525739A915f7d00373Bc7B3ABEa2D"}) {
      id
      depositedToken0
      depositedToken1
      pool {
       id
       token0 {
        name
        symbol
       }
       token1 {
        name
        symbol
       }
       tick
      }
      withdrawnToken0
      withdrawnToken1
    }
  }`;

  useEffect(() => {
    const connectToWallet = async () => {
      //* Will Reload whenever the Chain is Changed
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      //* Will Reload whenever the Account is Changed
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });

      try {
        const { ethereum } = window;
        if (ethereum) {
          // GET ACCOUNT ADDRESSES
          const account = await ethereum.request({
            method: "eth_requestAccounts"
          });

          setCurrentWalletAddress(account[0]);
        } else {
          alert("Install Metamask!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    let fetchPositionHandler = async () => {
      try {
        const result = await axios.post(allDexs[params.id].graphQlEndpoint, {
          query: Query
        });
        const ans = result.data.data.positions;
        setAllFetchedData(ans);
        setFetchingPositions(false);
      } catch (error) {
        console.log(error);
        setFetchingPositions(false);
      }
    };

    connectToWallet();
    fetchPositionHandler();
  }, [Query, currentWalletAddress]);

  return (
    <div className="flex min-h-fit w-full flex-col gap-3">
      {/* ------ FILTERS & SEARCHBAR ------ */}
      <div className="flex justify-between items-center">
        {/* SEARCH BAR */}
        {/* <div className="flex justify-start items-center bg-gray-200 bg-opacity-40 gap-2 px-2">
          <input
            className="text-sm py-1 rounded-md bg-transparent outline-none text-black font-thin placeholder:font-normal"
            placeholder="Enter Pool Address"
            value={poolAddress}
            onChange={(e) => setPoolAddress(e.target.value)}
          />
          <CiSearch size={20} />
  </div> */}
      </div>
      {/* ------ CONTENT DISPLAY ------ */}
      <div className="flex w-full h-fit">
        {fetchingPositions === true ? (
          <div>fetching Datas....</div>
        ) : (
          <div className="grid grid-cols-1 w-full h-[650px] overflow-y-auto gap-5">
            {allFetchedData.length == 0 ? (
              <div>No Positions</div>
            ) : (
              allFetchedData.map((element, index) => (
                <div key={index + 1} className="text-black flex flex-col gap-5">
                  {/* Banner data */}
                  <div className="flex justify-between items-center w-full h-fit">
                    {/* Banner Left data */}
                    <div className="flex justify-start items-center gap-2 w-fit h-fit">
                      <h2 className="text-base font-semibold">{`${element.pool.token0.symbol} / ${element.pool.token1.symbol}`}</h2>
                      <Link
                        href={`https://etherscan.io/address/${element.pool.id}`}
                        className="text-xs"
                      >
                        <CiLocationArrow1 size={10} />
                      </Link>
                    </div>
                    {/* Banner Right data */}
                    <div className="flex justify-center items-center gap-5">
                      <div className="flex justify-center items-center gap-2">
                        <h2 className="text-xs text-gray-400">Tick</h2>
                        <p className="text-xs text-green-500 font-semibold">
                          {element.pool.tick}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Token0 */}
                  <div className="border-l-2 w-full h-fit flex flex-col gap-2 p-2 border-blue-500 bg-blue-400 bg-opacity-5">
                    <p className="text-sm">{element.pool.token0.name}</p>
                    {/* Token0 depositedToken0 */}
                    <div className=" text-xs flex justify-start items-center gap-1">
                      <p className="p-1 bg-green-500 rounded-full" />
                      <p className="text-green-500">Deposited: </p>
                      <p className="font-semibold">{element.depositedToken0}</p>
                    </div>
                    {/* Token0 withdrawnToken0  */}
                    <div className=" text-xs flex justify-between items-center">
                      <div className="flex justify-start items-center gap-1">
                        <p className="p-1 bg-red-500 rounded-full" />
                        <p className="text-red-500">Withdrawn: </p>
                        <p className="font-semibold">
                          {element.withdrawnToken0}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Token1 */}
                  <div className="border-l-2 w-full flex flex-col gap-2 h-fit p-2 border-yellow-500 bg-yellow-400 bg-opacity-5">
                    <p className="text-sm">{element.pool.token1.name}</p>
                    {/* Token0 depositedToken1 */}
                    <div className=" text-xs flex justify-start items-center gap-1">
                      <p className="p-1 bg-green-500 rounded-full" />
                      <p className="text-green-500">Deposited: </p>
                      <p className="font-semibold">{element.depositedToken1}</p>
                    </div>
                    {/* Token1 withdrawnToken1  */}
                    <div className=" text-xs flex justify-start items-center gap-1">
                      <p className="p-1 bg-red-500 rounded-full" />
                      <p className="text-red-500">Withdrawn: </p>
                      <p className="font-semibold">{element.withdrawnToken1}</p>
                    </div>
                  </div>
                  {/* Pool Interactions */}
                  {/* <div className="flex justify-end text-sm items-center gap-5">
                    <button className=" py-1 px-2 bg-green-400 rounded-md text-white">
                      + Liquidity
                    </button>
                    <button className=" py-1 px-2 bg-red-400 rounded-md text-white">
                      - Liquidity
                    </button>
              </div> */}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Positions;
