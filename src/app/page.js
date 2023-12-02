export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* HERO SECTION */}
      <div className="flex flex-col gap-5 min-h-screen px-28 min-w-full justify-center items-center bg-[url('../assets/abstract.png')] bg-no-repeat bg-center">
        {/* NEWS UPDATE SECTION */}
        <div className="flex justify-center items-center gap-5 bg-gray-400 py-1 px-3 rounded-full bg-opacity-30">
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
          </span>
          <p className="text-white text-sm sm:text-base">
            New Update Rolling out in 2 Days
          </p>
        </div>
        {/* HERO BANNER SECTION */}
        <div className="flex flex-col gap-10">
          <h2 className="text-white text-7xl sm:text-8xl text-center">
            Platform to Manage Multiple Liquidity Pools
          </h2>
          <p className="text-slate-400 text-center text-sm sm:text-lg">
            Seamlessly deploy and manage liquidity pools across multiple
            decentralized exchanges, optimizing your portfolio for maximum
            returns.
          </p>
        </div>
      </div>
    </main>
  );
}
