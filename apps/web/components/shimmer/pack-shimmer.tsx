import React from 'react';
import "../../app/globals.css"

const PackShimmer = () => {
    return (
        <div className="rounded-2xl bg-linear-to-b/increasing from-white via-[#faefe2] to-[#faefe2] border">
        <section className="pt-36 pb-20 px-4 rounded-2xl">
         <div className="flex flex-wrap justify-center gap-4">
            {
                Array(12).fill(1).map((_, index) => {
                    return (
                        <div key={index} className="kk h-[270px] w-[220px] rounded-xl bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 shimmer bg-[length:200%_100%]" >

                       </div >
                    )
                })
            }
        </div >
        </section>
        </div>
    );
};

export default PackShimmer;