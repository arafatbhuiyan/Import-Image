import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const links = [
    { name: "About", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Product", to: "/product" },
  ];

  return (
    <div className=" bg-gray-400 p-3 ">
      <nav className="flex gap-6 justify-center py-2 text-lg">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            onClick={() => setActive(i)}
            className={active === i ? "text-amber-700 font-bold" : "text-black"}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
