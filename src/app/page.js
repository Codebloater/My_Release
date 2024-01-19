"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../app/icon.svg";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { RiPlayCircleFill } from "react-icons/ri";

export default function Home() {
  //* -------------------- STATE VARIABLES DECLARATION --------------------
  const [newsletterEmailAddress, setNewsletterEmailAddress] = useState("");
  const [newsletterResponseStatus, setNewsletterResponseStatus] = useState("");

  let allNavbars = [];

  //* -------------------- FUNCTIONS DECLARATION --------------------

  return (
    <main className="flex min-h-screen w-screen flex-col relative items-center">
      <video
        src={"assets/Sunset.mp4"}
        loop
        autoPlay
        muted
        className="h-screen w-screen object-cover absolute -z-10 top-0 left-0 right-0"
      ></video>
      {/* --------- NAVBAR SECTION --------- */}
      <nav className=" flex fixed top-0 left-0 right-0 justify-between items-center py-8 px-20 ">
        {/* LEFT SECTION */}
        <div className="flex justify-start items-center gap-8">
          {/* LEFT LEFT SECTION */}
          <div className=" flex justify-center items-center gap-3">
            <Image alt="PoolFi Logo Svg " src={Logo} width={22} height={22} />
            <h2 className="text-xl text-black font-bold">Poolfi</h2>
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
      <div className=" flex min-h-screen min-w-full justify-center items-center bg-opacity-40">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h2 className="text-7xl text-center font-heroHeading text-black">
            Manage Liquidity Pools Effortlessly
          </h2>
          <p className="text-center text-white w-4/6">
            Poolfi is where DeFi enthusiasts embrace automation, managing
            liquidity effortlessly in a dynamic and thriving ecosystem.
          </p>
          {/* Demo Link */}
          <Link
            href={"https://youtu.be/JD_IvcW1490"}
            className="text-black flex justify-end items-center gap-2 bg-white border-[0.5px] hover:text-black font-medium rounded-full text-sm px-3 py-2 text-center"
          >
            <RiPlayCircleFill size={20} />
            Demo
          </Link>
          {/* SOCIAL MEDIA LINKS */}
          <div className="flex justify-center items-center text-white gap-10">
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
      <div className="text-white w-full min-h-fit mt-20 flex flex-col gap-10">
        <div className="flex justify-center items-center">
          <Image src={"assets/tv.svg"} width={300} height={300} alt="Tv Icon" />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-yellow-300 font-dateSpecial text-5xl text-center">
            Join the Guild
          </h2>
          <div className="flex justify-center items-center">
            <p className="font-heroInfo w-2/6 text-center">
              Dive into a thriving community of like-minded enthusiasts.
              Connect, share insights, and experience DeFi together. Join our
              Discord server for an unparalleled club membership!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href={"https://discord.gg/Y7bzjvGP"}
              className="w-fit h-fit py-1 px-4 bg-transparent border-2 border-yellow-500 rounded-md text-yellow-400 hover:bg-yellow-500 hover:text-black"
            >
              JOIN
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
