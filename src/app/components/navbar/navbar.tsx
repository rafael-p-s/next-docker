//icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import loginIcon from "../../../../public/icons/Login.png";
import languageIcon from "../../../../public/icons/World.png";

// Components
import Image from "next/image";
import LinkButton from "../linkButton/linkButton";

//Utilities
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`flex flex-col items-center ${
          isOpen ? "h-[52px]" : "h-[0px]"
        } w-[395px] rounded-b-3xl bg-[#f2ded5] border border-black shadow-lg transition-all duration-300 ease-in-out `}
      >
        <div className={` flex-row justify-center items-center gap-[16px] ${isOpen ? "flex" : "hidden"}`}>
          <LinkButton linkRoute="/linguagens" imgSRC={languageIcon} imgALT="Linguas"/>
          <LinkButton linkRoute="/login" imgSRC={loginIcon} imgALT="Login"/>
        </div>

        <button
          className={`mb-[-25px] shadow-lg flex flex-col justify-center items-center rounded-full z-2 border-b border-black bg-[#95aad8] w-[30px] h-[30px] ${
            isOpen ? "mt-[-5px]" : "mt-0"
          }`}
          onClick={toggleNavBar}
        >
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
    </div>
  );
}
