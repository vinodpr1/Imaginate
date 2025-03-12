"use client";
import React, { useEffect, useState } from "react";
import PackCard from "./PackCard";
import axios from "axios";
import { IPack } from "./PackCard";
import PackShimmer from "./shimmer/pack-shimmer";

const Packs = () => {
  const [packs, setPacks] =useState<IPack[] | null>(null);

  useEffect(()=>{
      getPacksData();
  },[]);

  const getPacksData= async () => {
      const response = await axios.get("http://localhost:8080/api/v1/ai/packs");
      setPacks(response.data.data);
  }
 
  if(!packs) return <PackShimmer/>

  return (
    <div className="rounded-2xl bg-linear-to-b/increasing from-white via-[#faefe2] to-[#faefe2] border">
      <section className="pt-36 pb-20 px-4 rounded-2xl">
        <div className="flex flex-wrap justify-center gap-4">
          {packs.map((pack, index) => {
              return <div key={index}>
                 <PackCard {...pack}/>
               </div>
            })}
        </div>
      </section>
    </div>
  );
};

export default Packs;
