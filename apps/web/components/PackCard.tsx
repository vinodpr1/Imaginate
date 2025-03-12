import React from "react";

export interface IPack {
  id: string,
  imageURL1: string,
  imageURL2: string,
  name: string
};

const PackCard = ({ imageURL1, imageURL2, name}:IPack) => {
  return (
    <div className="p-4 rounded-lg cursor-pointer shadow-md border-gray-100 border-2 hover:border-red-400 hover:bg-gray-100 transition-all duration-300">
      <div className="flex gap-2">
        <img
          width={100}
          className="rounded-xl"
          src={imageURL1}
          alt="left"
        />
        <img
          width={100}
          className="rounded-xl"
          src={imageURL2}
          alt="right"
        />
      </div>
      <div className="pt-2 max-w-[200px]">
         <h3 className="text-black font-semibold">{name}</h3>
         <p className="">
           A couple walking through a snowy forest, holding hands, with heart-shaped.
         </p>
      </div>
    </div>
  );
};

export default PackCard;
