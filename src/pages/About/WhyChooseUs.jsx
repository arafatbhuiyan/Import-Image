import React, { useState } from "react";

const WhyChooseUs = () => {
    const [bgColor, setBgColor]= useState("A")


  return (
    <div className="max-w-6xl mx-auto ">
      <div className=" grid grid-cols-2">
          <div className="mt-25">
            <h2 className="text-4xl leading-tight">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div>
                {/* -------------------------- */}
              <div className=" mt-[64px] ">
                <div className=" flex px-4 py-2 bg-[#031b31] rounded text-white">
                    <img 
                    src="https://i.ibb.co/FkCRh6BM/star-2.png" 
                    alt="" 
                    className={` h-[28px] w-[28px]`}

                    />
                    <h3 className=" py-1 pl-[12px] text-lg">We connect our customers with the best.</h3>
                </div>

                <div className="flex mt-[26px] px-4 py-2">
                    <img 
                    src="https://i.ibb.co/LzvqwkKv/star-1.png" 
                    alt="" 
                    className="h-[28px] w-[28px] "
                    />
                    <h3 className=" p-1 pl-[12px] text-lg">Advisor success customer launch party.</h3>
                </div>

                <div className="flex mt-[26px] px-4 py-2">
                    <img 
                    src="https://i.ibb.co/8CWcbSK/sun.png" 
                    alt="" 
                    className="h-[28px] w-[28px]"
                    />
                    <h3 className=" p-1 pl-[12px] text-lg">Business-to-consumer long tail.</h3>
                </div>
              </div>
            </div>
          </div>
        

        {/* Right side............................. */}
        <div className="flex justify-end">
          <div className=" grid relative">
            <img
              src="https://i.ibb.co/9k6NCW5s/Rectangle-1270-4.png"
              alt=""
              className=""
            />

            <div className=" absolute left-0 -bottom-35">
              <img
                src="https://i.ibb.co/vv1sR365/Group-222.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
