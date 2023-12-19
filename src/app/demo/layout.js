"use client";

import Image from "next/image";
import Logo from "../icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";

export default function DemoLayout({ children }) {
  const pathname = usePathname();

  let navbarSections = [
    {
      name: "Dashboard",
      path: `/demo/dashboard`
    }
  ];

  return (
    <section className="bg-white flex justify-start items-start min-h-screen min-w-full ">
      {/* --------- DEMO PAGE NAVBAR SECTION --------- */}
      <div className="  w-fit h-screen grid grid-cols-1 content-between py-5 px-5">
        {/* --------- DEMO PAGE NAVBAR LEFT SECTION --------- */}
        <div className=" flex flex-col justify-start items-center gap-10">
          <Link
            href={"/demo"}
            className="flex flex-col justify-center items-center gap-3"
          >
            <Image src={Logo} width={30} height={30} alt="Company Logo" />
          </Link>
          <div className="flex justify-center items-center gap-5">
            {navbarSections.map((element, index) => (
              <div key={index + 1} className="">
                <Link
                  href={element.path}
                  className=" text-xs text-[#4294FF] flex justify-start items-center gap-3"
                >
                  <MdSpaceDashboard size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* --------- DEMO PAGE NAVBAR RIGHT SECTION --------- */}
      </div>
      <div className=" w-full h-full ">{children}</div>
    </section>
  );
}
