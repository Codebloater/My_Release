"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allDexs } from "../constants/Variables";
import { ethereum } from "@/assets/blockchains";

export default function DashboardLayout({ children }) {
  let pathname = usePathname();
  let wholePath = pathname.toString();
  let allPaths = wholePath.split("/");

  return (
    <section className="bg-white flex flex-col justify-start items-start min-h-screen min-w-full ">
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
            <Link
              className={`${
                allPaths[3] == index
                  ? "flex justify-center items-center "
                  : "flex justify-center items-center opacity-30"
              }`}
              href={`/demo/dashboard/${index}`}
            >
              <Image src={element.icon} width={30} height={30} alt="Dex Logo" />
            </Link>
          </div>
        ))}
      </div>
      <div className=" w-full h-fit py-2">{children}</div>
    </section>
  );
}
