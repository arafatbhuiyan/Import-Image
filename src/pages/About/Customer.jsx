import React from "react";
import Button from "../../Component/Button";

const Customer = () => {
    function btn(){
        alert("Nothing was given")
    }


  return (
    <div className="container max-w-6xl mx-auto mt-[120px]">
        {/* left side........................... */}
      <div className=" grid relative grid-cols-2">

        <div className=" grid relative">
          <img
            src="https://i.ibb.co/FLpb4Z5n/Rectangle-1270-3.png"
            alt=""
            className=""
          />

          <div className=" absolute right-25 -bottom-35">
            <img
              src="https://i.ibb.co/pvVpNmxV/Group-209.png"
              alt=""
              className=""
            />
          </div>
        </div>

        {/* Right side.......................... */}
        <div className="pl-16 mb-[120px]">
            <h2 className=" text-4xl flex pt-[90px] leading-tight">We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h2>
            <div className=" mt-[20px]">
                <div className="flex pt-[24px]">
                    <img
                    src="https://i.ibb.co/8gndxQ5N/Group-210.png" 
                    alt="" 
                    className=" h-[24px] w-[24px] "
                    />
                    <h3 className="pl-[27px]">We connect our customers with the best.</h3>
                </div>

                <div className=" flex pt-[24px]">
                    <img 
                    src="https://i.ibb.co/8gndxQ5N/Group-210.png" 
                    alt="" 
                    className=" h-[24px] w-[24px] "
                    />
                    <h3 className="pl-[27px]">Advisor success customer launch party.</h3>
                </div>

                <div className=" flex pt-[24px]">
                    <img 
                    src="https://i.ibb.co/8gndxQ5N/Group-210.png" 
                    alt="" 
                    className=" h-[24px] w-[24px] "
                    />
                    <h3 className="pl-[27px]">Business-to-consumer long tail.</h3>
                </div>
            </div>     
            <div className="mt-14">
                <Button onClick={btn} /> 
            </div>
                 
        </div>

        
      </div>
    </div>
  );
};

export default Customer;
