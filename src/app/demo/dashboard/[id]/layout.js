"use client";

import Image from "next/image";
import { allDexs } from "../../constants/Variables";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DexDashBoardLayout({ children, params }) {
  let pathname = usePathname();
  let wholePath = pathname.toString();
  let allPaths = wholePath.split("/");

  const allDexNav = [
    {
      name: "Positions",
      path: `/demo/dashboard/${params.id}/positions`,
      pathName: "positions"
    }
  ];

  return (
    <section className="flex min-h-fit w-full flex-col gap-3 pt-4">
      <nav className="flex flex-col gap-10 border-b-2 pb-2 mx-4">
        <div className="flex justify-start items-center gap-5 h-fit w-full">
          <Image
            alt="Dex Icons"
            src={allDexs[params.id].icon}
            width={120}
            height={120}
          />
          <div>
            <h2 className="text-lg font-semibold">{allDexs[params.id].name}</h2>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 h-fit w-full">
          {allDexNav.map((element, index) => (
            <div key={index + 1} className="">
              <Link
                href={element.path}
                className={`${
                  allPaths[allPaths.length - 1] == element.pathName
                    ? "text-xs text-black"
                    : "text-xs text-gray-400"
                }`}
              >
                {element.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div className="px-4">{children}</div>
    </section>
  );
}
