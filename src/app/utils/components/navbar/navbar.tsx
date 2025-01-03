"use client";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Image from "next/image";
import World from "../../icons/World.png";
import Login from "../../icons/Login.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false); 

  return (
    <div className="bg-[#FFE1B6] h-screen">
      {/* Logo e Navbar superior */}
      <div className="flex flex-col items-center">
        <div
          className={`bg-[#F2DED5] p-5 w-[90%] max-w-md rounded-b-3xl shadow-lg flex justify-center border border-black
            transition-transform duration-200 ease-in-out ${
              open ? "translate-y-0" : "-translate-y-[40%]"
            }`}
        >
          {open && (
            <div className="flex items-center space-x-6">
              {/* Primeira Imagem */}
              <div className="flex justify-center items-center">
                <Image src={World} alt="Imagem 1" width={40} height={40} className="object-contain"/>
              </div>

              {/* Segunda Imagem */}
              <div className="flex justify-center items-end">
                <Image src={Login} alt="Imagem 2" width={40} height={40} className="object-contain"/>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Ícone de alternância (seta) */}
      <div className="flex justify-center mt-2">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#A99EE3] text-white text-3xl rounded-full p-2 shadow-lg"
        >
          {open ? <BsArrowUpShort /> : <BsArrowDownShort />}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
