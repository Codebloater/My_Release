import Link from "next/link";
import Image from "next/image";
import Logo from "../app/icon.svg";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { ethereum, polygon, binance } from "@/assets/blockchains";
import { diversify, newPools, migrate, automated } from "@/assets/features";
import launchingBanner from "../assets/launching.svg";

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
      info: "Diversify your assets effortlessly with our portfolio management feature. Tailor your liquidity pools across multiple tokens and decentralized exchanges, reducing risk and maximizing opportunities. Achieve optimal asset allocation and strategic balance, ensuring a robust and diversified portfolio that aligns with your investment goals.",
      logo: diversify
    },
    {
      heading: "New Pools",
      info: "Discover the latest opportunities in the DeFi ecosystem with our New Pools feature. Explore and invest in newly created liquidity pools, strategically listed for optimal returns. Stay ahead of the curve and maximize your investment potential with our dynamically updated selection of high-yield opportunities.",
      logo: newPools
    },
    {
      heading: "Migrate Assets",
      info: "Automate asset migration effortlessly! Seamlessly transfer funds from one liquidity pool on a blockchain to another decentralized exchange (Dex) or blockchain. This feature streamlines investment diversification, ensuring users can efficiently optimize their portfolio across various platforms, enhancing flexibility and maximizing returns.",
      logo: migrate
    },
    {
      heading: "Automate",
      info: "Maximize returns effortlessly with our Automation tools. Seamlessly manage your investment portfolio by automating strategic decisions. From rebalancing to yield optimization, our automation features ensure your assets are dynamically adjusted, empowering you to achieve higher returns with minimal effort and optimal efficiency.",
      logo: automated
    }
  ];

  let allNavbars = [];

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
      </nav>
      {/* --------- HERO SECTION --------- */}
      <div className=" flex min-h-screen min-w-full justify-center items-center bg-blue-50 bg-opacity-40">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h2 className="text-7xl font-heroHeading">
            Manage Liquidity Pools Effortlessly
          </h2>
          <p className="text-base font-heroInfo text-gray-400">
            Seamlessly deploy and manage liquidity pools across multiple
            decentralized exchanges, optimizing your portfolio for maximum
            returns.
          </p>
          {/* NEWSLETTER SIGNUP FORM */}
          {/* <form
            onSubmit={HandleNewsletterSubmit}
            className="flex justify-center items-center gap-6"
          >
            <input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-80 border-[0.5px] border-gray-400 text-sm font-normal placeholder:font-normal outline-none rounded-full px-4 py-3"
              placeholder="Enter Email Address"
            />
            <button
              type="submit"
              className="bg-blue-500 text-sm text-white font-semibold px-5 py-3 rounded-full"
            >
              SUBMIT
            </button>
            </form> */}

          <div className="flex justify-center items-center gap-10">
            <Link href={"https://twitter.com/pool_fi"}>
              <FaXTwitter size={20} />
            </Link>
            <Link href={"https://www.linkedin.com/company/poolfi/"}>
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
      {/* --------- FEATURES SECTION --------- */}
      <div className="flex flex-col my-20 gap-32 ">
        <div className="flex flex-col gap-3">
          <p className="text-center text-xs text-blue-500 font-semibold">
            FEATURES
          </p>
          <div className="flex flex-col gap-8">
            <h2 className="text-center text-4xl">
              Effective Tools to Enhance your Efficiency
            </h2>
            <p className="text-center text-xs text-gray-400">
              Streamlined liquidity management with user-friendly interface,
              multi-chain support, analytics, security, and community engagement
              for optimal performance.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-24 min-h-fit min-w-full">
          {featuresSection.map((element, index) => (
            <div
              key={index + 1}
              className="flex flex-col gap-8 w-80 h-70 bg-gray-50 rounded-md p-6"
            >
              <div className=" flex justify-start items-center">
                <Image src={element.logo} width={35} height={35} />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-base font-heroHeading">
                  {element.heading}
                </h2>
                <p className=" text-xs font-heroInfo">{element.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --------- LAUNCHING SECTION --------- */}
      <div className="flex my-20 w-full h-fit px-4">
        <div className="grid grid-cols-2  py-10 w-full h-fit rounded-lg bg-blue-500">
          {/* LEFT SIDE */}
          <div className="flex justify-start items-center">
            <div className="flex flex-col gap-6 px-10">
              <div>
                <h2 className="text-white text-sm font-normal bg-white bg-opacity-20 w-fit h-fit rounded-full px-4 py-1">
                  🚀 Announcement!
                </h2>
              </div>
              <h2 className="text-5xl text-white font-semibold">
                BETA RELEASE
              </h2>
              <p className="text-base font-heroInfo text-white">
                We're thrilled to announce the upcoming launch of our BETA
                Version, designed to empower users like you in the dynamic world
                of DeFi.
              </p>
              <div className="flex justify-start font-dateSpecial items-center text-2xl gap-2 text-white bg-white bg-opacity-20 rounded-md px-2 py-2 w-fit h-fit">
                <div>15</div>
                <div>| 01</div>
                <div>| 2024</div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center">
            <Image src={launchingBanner} width={430} height={430} />
          </div>
        </div>
      </div>
    </main>
  );
}
