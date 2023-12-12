"use client";

import Image from "next/image";
import Logo from "../icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  let navbarSections = [
    {
      name: "Dashboard",
      path: pathname
    }
  ];

  return (
    <section className="bg-black flex flex-col min-h-screen min-w-full ">
      <div className="flex bg-[#191D1F] justify-between items-center px-4 py-3">
        <div className=" flex justify-start items-center gap-10">
          <Link
            href={"/demo"}
            className="flex justify-start items-center gap-3"
          >
            <Image src={Logo} width={15} height={15} alt="Company Logo" />
            <h2 className="text-white text-base font-semibold">Poolfi</h2>
          </Link>
          <div className="flex justify-center items-center gap-5">
            {navbarSections.map((element, index) => (
              <div key={index + 1} className="flex">
                <Link href={element.path} className="text-white text-xs">
                  {element.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="py-1 px-2 text-xs rounded-md border-2 border-yellow-300 border-dashed text-yellow-400 font-semibold bg-opacity-10 bg-yellow-300">
          <p>BETA</p>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
