import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const links = [
    { name: "About", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Product", to: "/product" },
  ];

  function btn() {
    alert("No information has been provided yet.");
  }

  return (
    <div className="w-full h-screen absolute containermx-auto p-3 z-10 mt-4">
      <nav className="flex gap-192 justify-evenly text-lg">
        <div className="text-white text-2xl font-bold flex gap-3">
          <div className=" ">
            <div className="bg-green-500 h-4 w-5 mb-1 rounded-r-full"></div>
            <div className="bg-green-500 h-4 w-7 rounded-r-full"></div>
          </div>

          <div>Boldo</div>
        </div>

        <div className=" flex gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              onClick={() => setActive(i)}
              className={
                active === i ? "text-amber-700 font-bold" : "text-white"
              }
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={btn}
            className="bg-white text-black px-4 py-1 rounded-full cursor-pointer"
          >
            Log in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
