import React, { useState } from "react";
import Hero from "../assets/Img/Hero.png";
import Button from "../Component/Button";
import Services from "./Services";

const About = () => {
  const [active, setActive] = useState("A");

  return (
    <div className="">
      <div className=" relative overflow-hidden">
        {/* Hero image.................. */}
        <img className="" src={Hero} alt="" />

        {/* //Overlay image............... */}
        <img
          className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-140 lg:h-130"
          src="https://i.ibb.co/S7QLRwyx/Ellipse-9-2x.png"
          alt="Ellipse"
        />
        {/* hero text.......... */}
        <div className="absolute top-20 w-full mt-2">
          <div className="container mx-auto flex justify-between items-start">
            {/* left side................ */}

            <div className="w-1/2 text-5xl text-white transform translate-y-30 Handshake infographic mass market crowdfunding iteration.">
              <div>Save time by building fast with Boldo Template</div>

              <p className="text-lg mt-6">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>

              <div className="flex gap-5 text-xl font-bold mt-5">
                <button
                  onClick={() => setActive("A")}
                  className={`border px-7 py-3 rounded-full ${
                    active === "A"
                      ? "bg-[#65E4A3] text-white"
                      : "bg-transparent text-white"
                  }`}
                >
                  Buy template
                </button>

                <button
                  onClick={() => setActive("B")}
                  className={`border px-7 py-3 rounded-full ${
                    active === "B"
                      ? "bg-[#65E4A3] text-white"
                      : "bg-transparent text-white"
                  }`}
                >
                  Explore
                </button>
              </div>
            </div>

            {/* Right side.............. */}
            <div>
              <div>
                <div>
                  <div className="w-full flex justify-end">
                    <img
                      className="w-[493.86px] h-[231.9px]"
                      src="https://i.ibb.co/twB2fX3P/Group-256.png"
                      alt=""
                    />
                  </div>
                  {/* ........................................... */}
                  <div className="w-full flex justify-end mt-[26.5px]">
                    <div className="w-1/2 ">
                      <img
                        src="https://i.ibb.co/Kxd09MqS/Group-287.png"
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="w-1/2">
                      <img
                        src="https://i.ibb.co/fzG2t109/Group-264.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  {/* ----------------------------------------------- */}
                </div>
              </div>
            </div>
            {/* Right side End................. */}
          </div>
        </div>
      </div>

      <section>
                  <Services />
      </section>
    </div>
  );
};

export default About;
