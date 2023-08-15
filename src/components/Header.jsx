import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex justify-between items-center max-w-[1240px] py-[12px] mx-auto">
        <div className="text-3xl font-bold">Cube Tech</div>
        {toggle ? (
          <AiOutlineClose
            className="md:hidden block text-white text-2xl"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenu
            className="md:hidden block text-white text-2xl"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responsive menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed top-[92px] bg-[black]
            ${toggle ? "left-[0]" : "left-[-100%]"}
          `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
