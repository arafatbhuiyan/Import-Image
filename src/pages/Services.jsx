import React from "react";
import Explorebtn from "../Component/Explorebtn";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto mt-[84px]">
      {/* title part........................... */}
      <div className=" text-center">
        <h3 className=" text-lg mt-[12px] text-gray-700">Our services</h3>
        <h1 className="text-5xl leading-tight mb-[76px]">
          Handshake infographic mass market <br />
          crowdfunding iteration.
        </h1>
      </div>
      {/*img part.....................*/}
      <div className="flex justify-between items-start gap-[100px]">
        <div className="">
          <img src="https://i.ibb.co/TBwrLTmV/Rectangle-1270.png"
           alt="" 
           className="mr-auto"
           />
           <h2 className="text-2xl pt-[24px] pb-[12px]">Cool feature title</h2>
           <p className="text-xl mb-[28px] text-gray-700">Learning curve network effects return on investment.</p>
            <Explorebtn/>
        </div>

        <div className="">
            <img src="https://i.ibb.co/gLgk2QRp/Rectangle-1270-1.png"
           alt="" 
           className="mx-auto"
           />
           <h2 className="text-2xl pt-[24px] pb-[12px]">Cool feature title</h2>
           <p className="text-xl mb-[28px] text-gray-700">Learning curve network effects return on investment.</p>
            <Explorebtn/>
        </div>

        <div className="">
            <img src="https://i.ibb.co/LDgjPfNM/Rectangle-1270-2.png"
           alt="" 
           className="ml-auto"
           />
           <h2 className="text-2xl pt-[24px] pb-[12px] flex">Cool feature title</h2>
           <p className="text-xl mb-[28px] text-gray-700">Learning curve network effects return on investment.</p>
            <Explorebtn/>
        </div>
      </div>
    </div>
  );
};

export default Services;
