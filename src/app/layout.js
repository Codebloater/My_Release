import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Logo from "./icon.svg";

export const metadata = {
  title: "PoolFi",
  description: "Seamless Liquidity Pool Management"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* NAVBAR SECTION */}
        <nav className=" flex justify-between items-center py-8 px-20 ">
          {/* LEFT SECTION */}
          <div className="text-white flex justify-center items-center gap-4">
            <Image alt="PoolFi Logo Svg " src={Logo} width={20} height={20} />
            <h2 className="text-lg font-semibold">Poolfi</h2>
          </div>
          {/*  RIGHT SECTION */}
          <div className="flex text-white justify-center items-center gap-5">
            <Link href={"https://twitter.com/pool_fi"}>
              <FaXTwitter size={25} />
            </Link>
            <Link href={"https://discord.gg/Fa78nkZm"}>
              <FaDiscord size={25} />
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
