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

  let featuresSection = [
    {
      heading: "Automation",
      info: "Diversify your assets effortlessly with our portfolio management feature. Tailor your liquidity pools across multiple tokens and decentralized exchanges, reducing risk and maximizing opportunities. Achieve optimal asset allocation and strategic balance, ensuring a robust and diversified portfolio that aligns with your investment goals.",
      logo: ""
    }
  ];

  let allNavbars = [];

  //* -------------------- FUNCTIONS DECLARATION --------------------

  //* Newsletter Subscription Form Handler
  const HandleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!newsletterEmailAddress) {
      alert("Add Email Address");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ emailAddress: newsletterEmailAddress })
      });

      if (res.ok) {
        console.log("Subscribed to Email Successfully!");
        setNewsletterResponseStatus("Subscribed!");
        setNewsletterEmailAddress("");
        setTimeout(() => {
          setNewsletterResponseStatus("");
        }, 2000);
      } else {
        setNewsletterResponseStatus("Error in Subscribing");
        setTimeout(() => {
          setNewsletterResponseStatus("");
        }, 2000);
        throw new Error("Error in Subscribing");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="flex justify-center items-center">
          <Link
            href={"/demo"}
            className="text-black flex justify-end items-center gap-2 bg-white border-[0.5px] hover:text-black font-medium rounded-full text-sm px-3 py-2 text-center"
          >
            <RiPlayCircleFill size={20} />
            Demo
          </Link>
        </div>
      </nav>
      {/* --------- HERO SECTION --------- */}
      <div className=" flex min-h-screen min-w-full justify-center items-center bg-opacity-40">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h2 className="text-7xl font-heroHeading text-black">
            Manage Liquidity Pools Effortlessly
          </h2>
          {/* NEWSLETTER SIGNUP FORM */}
          <form
            onSubmit={HandleNewsletterSubmit}
            className="flex justify-center items-center gap-6"
          >
            <input
              type="email"
              value={newsletterEmailAddress}
              onChange={(e) => setNewsletterEmailAddress(e.target.value)}
              className="w-80 border-[0.5px] border-white placeholder:text-white text-black bg-transparent text-sm font-normal placeholder:font-normal outline-none rounded-full px-4 py-3"
              placeholder="Enter Email Address"
            />
            <button
              type="submit"
              className="text-sm text-black font-normal px-5 py-3 rounded-full bg-transparent border-[0.5px] bg-white"
            >
              <div>IGNITE</div>
            </button>
          </form>
          <div className="flex justify-center items-center text-xs font-semibold">
            <div>
              {newsletterResponseStatus === "Subscribed!" ? (
                <p className="text-green-500">{newsletterResponseStatus}</p>
              ) : (
                <p className="text-red-500">{newsletterResponseStatus}</p>
              )}
            </div>
          </div>
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
          <Image src={"assets/tv.svg"} width={300} height={300} />
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
