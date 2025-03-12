import React from "react";

const PackCard = () => {
  return (
    <div className="p-4 rounded-lg cursor-pointer shadow-md border-gray-100 border-2 hover:border-red-400 hover:bg-gray-100 transition-all duration-300">
      <div className="flex gap-2">
        <img
          width={100}
          className="rounded-xl"
          src="https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726229559-2c3b7b4d5275a1e22a803d8cbc993644-4.png"
          alt="left"
        />
        <img
          width={100}
          className="rounded-xl"
          src="https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726227815-91ce1d8c4f611455df9b9811e5cd22d3-4.png"
          alt="right"
        />
      </div>
      <div className="pt-2 max-w-[200px]">
         <h3 className="text-black font-semibold">Valantine Day</h3>
         <p className="">
           A couple walking through a snowy forest, holding hands, with heart-shaped snowflakes falling around them, warm glowing lights from a nearby cabin, cozy and romantic, 4K ultra-realistic.
         </p>
      </div>
    </div>
  );
};

export default PackCard;
