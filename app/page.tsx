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
  { restaurant: "Blaze Pizza", deal: "$1 Fountain Drink", day: "Everyday" },
];

export default function Page() {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [newDeal, setNewDeal] = useState<Deal>({
    restaurant: "",
    deal: "",
    day: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDeal((prev) => ({ ...prev, [name]: value }));
  };

  const addDeal = () => {
    if (newDeal.restaurant && newDeal.deal && newDeal.day) {
      setDeals((prev) => [...prev, newDeal]);
      setNewDeal({ restaurant: "", deal: "", day: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#D2B48C] text-[#8B4513] text-center p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6 text-shadow-retro">
        Welcome to Munch Madness, Aggies
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
          don&apos;t forget your student ID for these rad deals!
        </p>
      </div>

      <div className="mt-8">
        {!showForm ? (
          <button
            className="bg-[#CD853F] hover:bg-[#A0522D] text-white font-bold py-2 px-4 border-2 border-[#8B4513] mb-4 rounded"
            onClick={() => setShowForm(true)}
          >
            Click here to add a deal!
          </button>
        ) : (
          <div className="mb-8 p-4 bg-[#FFE4B5] border-4 border-[#5D4037] rounded-lg">
            <input
              type="text"
              name="restaurant"
              value={newDeal.restaurant}
              onChange={handleInputChange}
              placeholder="Restaurant Name"
              className="mb-2 p-2 w-full border border-[#8B4513] rounded"
            />
            <input
              type="text"
              name="deal"
              value={newDeal.deal}
              onChange={handleInputChange}
              placeholder="Deal Details"
              className="mb-2 p-2 w-full border border-[#8B4513] rounded"
            />
            <input
              type="text"
              name="day"
              value={newDeal.day}
              onChange={handleInputChange}
              placeholder="Valid Days"
              className="mb-2 p-2 w-full border border-[#8B4513] rounded"
            />
            <button
              onClick={addDeal}
              className="bg-[#CD853F] hover:bg-[#A0522D] text-white font-bold py-2 px-4 border-2 border-[#8B4513] rounded"
            >
              Add Deal
            </button>
          </div>
        )}
      </div>

      <footer className="mt-12 text-sm">
        <p>Made with ❤️ by Borna</p>
      </footer>
    </div>
  );
}
