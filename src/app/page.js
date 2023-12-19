import Link from "next/link";
import Image from "next/image";
import Logo from "../app/icon.svg";
import { FaXTwitter, FaDiscord, FaCirclePlay } from "react-icons/fa6";
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

  let allNavbars = [
    {
      name: "Blogs",
      url: "/blogs"
    },
    {
      name: "About",
      url: "/about"
    }
  ];

  return (
    <main className="flex min-h-screen w-full flex-col relative items-center">
      {/* --------- NAVBAR SECTION --------- */}
      <nav className=" flex fixed top-0 left-0 right-0 justify-between items-center py-8 px-20 ">
        {/* LEFT SECTION */}
        <div className="flex justify-start items-center gap-8">
          {/* LEFT LEFT SECTION */}
          <div className=" flex justify-center items-center gap-3">
            <Image alt="PoolFi Logo Svg " src={Logo} width={20} height={20} />
            <h2 className="text-lg text-black font-semibold">Poolfi</h2>
          </div>
          {/* LEFT RIGHT SECTION */}
          <div className="flex justify-center items-center gap-8">
            {allNavbars.map((element, index) => (
              <div key={index + 1}>
                <Link href={`${element.url}`} className="text-xs">
                  {element.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* END SECTION */}
        <div className="">
          <Link
            href={"./demo"}
            className="text-black border-[1px] hover:bg-black hover:text-white hover:border-black text-sm rounded-full py-2 px-3"
          >
            LAUNCH APP
          </Link>
        </div>
      </nav>
      {/* --------- HERO SECTION --------- */}
      <div className="flex flex-col gap-5 min-h-screen min-w-full justify-center items-center bg-no-repeat bg-center">
        {/* NEWS UPDATE SECTION */}
        {/* <div className="flex justify-center items-center gap-5 bg-gray-400 py-1 px-3 rounded-full bg-opacity-30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3  bg-green-500"></span>
          </span>
          <p className="text-black text-base">New Update in Every 2 Days!</p>
  </div> */}
        {/* HERO BANNER SECTION */}
        <div className="flex flex-col gap-12">
          <h2 className="text-black text-6xl text-center font-semibold">
            Manage Liquidity Pools Effortlessly
          </h2>
          <p className="text-gray-400 text-center text-lg font-light">
            Seamlessly deploy and manage liquidity pools across multiple
            decentralized exchanges, optimizing your portfolio for maximum
            returns.
          </p>
          {/* <div className="flex justify-center items-center gap-3">
            <Link
              href={"/demo"}
              className=" bg-[#4294FF] text-white text-sm rounded-md py-2 px-3"
            >
              LAUNCH APP
            </Link>
            <button className="flex justify-center text-[#4294FF] bg-white items-center gap-2 py-2 px-3 border-[1px] rounded-md">
              <FaCirclePlay size={20} className="" />
              <p className="text-sm">Demo</p>
            </button>
</div> */}
        </div>
      </div>
      {/* --------- FEATURES SECTION --------- */}
      {/* --------- SUPPORTED BLOCKCHAINS SECTION --------- */}
    </main>
  );
}
