import React from "react";
import PackCard from "./PackCard";

const Packs = () => {
  return (
    <div className="rounded-2xl bg-linear-to-b/increasing from-white via-[#faefe2] to-[#faefe2] border">
      <section className="pt-36 pb-20 px-4 rounded-2xl">
        <div className="flex flex-wrap justify-center gap-4">
          {Array(12)
            .fill(2)
            .map((_, index) => {
              return <PackCard key={index} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default Packs;
