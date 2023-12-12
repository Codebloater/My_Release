import Link from "next/link";
import Image from "next/image";
import Logo from "../app/icon.svg";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { ethereum, polygon, binance } from "@/assets/blockchains";
import { diversify, newPools, migrate, automated } from "@/assets/features";

export default function Home() {
  let supportedChains = [
    {
      name: "Ethereum",
      logo: ethereum
    },
    {
      name: "Polygon",
      logo: polygon
    }
  ];

  let featuresSection = [
    {
      heading: "Diversify Assets",
      info: "Diversify assets seamlessly across multiple DEXs and blockchains, optimizing returns and spreading risk.",
      logo: diversify
    },
    {
      heading: "New Pools",
      info: "Explore new income streams effortlessly by identifying high-yield liquidity pools across the diverse and dynamic DeFi ecosystem.",
      logo: newPools
    },
    {
      heading: "Migrate Assets",
      info: "Seamlessly shift assets between DeFi ecosystem, optimizing returns and adapting to market dynamics.",
      logo: migrate
    },
    {
      heading: "Automate",
      info: "Automate liquidity pool tasks effortlessly, optimizing asset ratios, fees, and rebalancing for peak performance.",
      logo: automated
    }
  ];

  return (
    <main className="flex min-h-screen flex-col relative  items-center">
      {/* --------- NAVBAR SECTION --------- */}
      <nav className=" flex fixed top-0 left-0 right-0 justify-between items-center py-8 px-20 ">
        {/* LEFT SECTION */}
        <div className="text-white flex justify-center items-center gap-6">
          <Image alt="PoolFi Logo Svg " src={Logo} width={20} height={20} />
          <h2 className="text-lg font-semibold">Poolfi</h2>
        </div>
        {/* END SECTION */}
        <div className="">
          <Link
            href={"./demo"}
            className="text-white border-[1px] hover:bg-white hover:text-black text-sm rounded-full py-2 px-3"
          >
            LAUNCH DEMO
          </Link>
        </div>
      </nav>
      {/* --------- HERO SECTION --------- */}
      <div className="flex flex-col gap-5 min-h-screen min-w-full justify-center items-center bg-[url('../assets/abstract.png')] bg-no-repeat bg-center">
        {/* NEWS UPDATE SECTION */}
        <div className="flex justify-center items-center gap-5 bg-gray-400 py-1 px-3 rounded-full bg-opacity-30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3  bg-green-500"></span>
          </span>
          <p className="text-white text-base">New Update in Every 2 Days!</p>
        </div>
        {/* HERO BANNER SECTION */}
        <div className="flex flex-col gap-12">
          <h2 className="text-white text-7xl text-center">
            Platform to Manage Multiple Liquidity Pools
          </h2>
          <p className="text-gray-300 text-center text-lg  font-normal">
            Seamlessly deploy and manage liquidity pools across multiple
            decentralized exchanges, optimizing your portfolio for maximum
            returns.
          </p>
          {/* NEWSLETTER SECTION */}
          {/*<div className="flex text-white justify-center items-center gap-5">
            <input
              className="text-white py-3 px-5 focus:outline-none bg-gray-400 rounded-full bg-opacity-30 font-thin text-lg w-3/12"
              placeholder="Enter your Email"
            />
            <button className=" py-3 px-7  text-lg rounded-full bg-white text-black hover:text-white hover:bg-black hover:border-black">
              Submit
            </button>
           </div> */}
          {/* FOLLOW US SECTION */}
          <div className="flex text-white justify-center items-center gap-5">
            <Link href={"https://twitter.com/pool_fi"}>
              <FaXTwitter size={25} />
            </Link>
            <Link href={"https://discord.gg/Fa78nkZm"}>
              <FaDiscord size={25} />
            </Link>
          </div>
        </div>
      </div>
      {/* --------- FEATURES SECTION --------- */}
      <div className="flex flex-col gap-14 min-w-full my-20 justify-center items-center ">
        <div className=" flex justify-evenly items-center gap-10">
          {featuresSection.map((element, index) => (
            <div
              key={index + 1}
              className="bg-black flex flex-col gap-6 py-10  px-2 w-80 h-80 rounded-md  justify-center items-center"
            >
              <Image src={element.logo} width={70} height={70} />
              <h2 className="text-white text-center pt-2 text-base font-semibold">
                {element.heading}
              </h2>
              <p className="text-center text-white opacity-40 text-sm font-normal">
                {element.info}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* --------- SUPPORTED BLOCKCHAINS SECTION --------- */}
      {/*<div className="flex flex-col gap-14 min-w-full my-20 justify-center items-center ">
        <h2 className="text-white text-3xl font-bold">Supported Chains</h2>
        <div className="flex justify-center items-center gap-20">
          {supportedChains.map((element, index) => (
            <div
              key={index + 1}
              className="flex justify-center items-center gap-3"
            >
              <Image src={element.logo} width={38} height={38} />
              <h2 className="text-white text-base font-semibold">
                {element.name}
              </h2>
            </div>
          ))}
        </div>
          </div> */}
    </main>
  );
}
