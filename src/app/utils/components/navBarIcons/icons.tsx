"use client";
import Image from "next/image";
import game from "../../icons/game.png";
import escrever from "../../icons/caderno.png";
import idiomas from "../../icons/bloco.png";

const NavbarIcons: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div className="flex justify-around w-full max-w-lg">
        <Image src={idiomas} alt="Idiomas" width={80} height={80} />
        <Image src={game} alt="Jogar" width={80} height={80} />
        <Image src={escrever} alt="Escrever" width={80} height={80} />
      </div>
    </div>
  );
};

export default NavbarIcons;
