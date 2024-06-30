import React from "react";
import localFont from "next/font/local";

const gothic = localFont({
  src: "../public/fonts/hangyaku-font/Hangyaku-xRRwq.ttf",
});

export default function Title() {
  return (
    <header className="flex flex-col min-w-full bg-black text-white justify-center items-center py-24 space-y-8">
      <h1 className={`${gothic.className} text-7xl md:text-9xl text-center`}>
        Warded Wishes
      </h1>
      <p className="text-center text-gray-200">
        Earn your wish, be the light that banishes the darkness. A Magical Girl
        TTRPG
      </p>
      <div className="flex flex-row space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-md">
          The Rules
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Charactor Creator
        </button>
      </div>
    </header>
  );
}
