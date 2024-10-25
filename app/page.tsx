"use client";

import { useState } from "react";

type Deal = {
  restaurant: string;
  deal: string;
  day: string;
};

const initialDeals: Deal[] = [
  { restaurant: "Burgers & Brew", deal: "$5 Classic Burger", day: "Monday" },
  { restaurant: "El Patio Mexican Grill", deal: "15% off", day: "Everyday" },
  {
    restaurant: "Tim's Hawaiian BBQ",
    deal: "$8 Chicken Katsu Plate",
    day: "Wednesday",
  },
  {
    restaurant: "Ike's Sandwiches",
    deal: "$7 Sandwiches after 3pm",
    day: "Everyday",
  },
  {
    restaurant: "Woodstock's Pizza",
    deal: "10% off pizza, wings, salads",
    day: "Everyday",
  },
  {
    restaurant: "Open Rice Kitchen",
    deal: "$1 Thai Tea",
    day: "Everyday",
  },
  {
    restaurant: "Village Pizza & Pints",
    deal: "$9 lunch special (includes mini pizza, salad or fries, and fountain drink)",
    day: "Monday-Thursday",
  },
];

export default function Page() {
  const [deals] = useState<Deal[]>(initialDeals);

  return (
    <div className="min-h-screen bg-[#D2B48C] text-[#8B4513] text-center p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6 text-shadow-retro">
        Welcome to Munch Madness
      </h1>

      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div className="animate-marquee inline-block">
          <span className="text-2xl font-bold">
            🚨 Biggest deals in town for the biggest backs around 🚨
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-[#FFE4B5] border-4 border-[#5D4037] rounded-lg p-4 flex flex-col justify-center items-center h-full"
          >
            <h3 className="text-lg font-bold text-[#A0522D] mb-2">
              {deal.restaurant}
            </h3>
            <p className="mb-2 text-center">{deal.deal}</p>
            <p>
              <strong>Day:</strong> {deal.day}
            </p>
          </div>
        ))}
      </div>

      <div className="border-3 border-dashed border-[#FF00FF] p-4 inline-block">
        <p className="text-lg font-bold rainbow-text inline">
          don&apos;t forget to show your student ID for these rad deals!
        </p>
      </div>

      <div className="mt-8">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdKC2MgWfiQEDoxfePLk4sZvkMJ2CO_o5d2TBk-MC-iHqtKhw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CD853F] hover:bg-[#A0522D] text-white font-bold py-2 px-4 border-2 border-[#8B4513] mb-4 rounded"
        >
          Click here to submit a deal!
        </a>
      </div>
      <footer className="mt-12 text-sm">
        <p>Made with ❤️ by Borna | Last updated: 10/25/2024</p>
      </footer>
    </div>
  );
}
