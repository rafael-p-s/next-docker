"use client";
import Image from "next/image";
import Passaro from "../../icons/coruja.png";
import Gaviao from "../../icons/aguia.png";

const IconsCentral: React.FC = () => {
  return (
    <>
      <div className="mt-[2rem] flex justify-between w-[600px] mx-auto">
        {/* Imagem do coruja */}
        <Image src={Passaro} alt="Imagem de um pássaro" width={150} height={150}/>

        {/* Texto central */}
        <div className="w-[10rem] flex items-center justify-center text-center">
          <p>
            Conquiste sua própria evolução, do modo que mais lhe agrada e no
            seu tempo...
          </p>
        </div>

        {/* Imagem do aguia */}
        <Image src={Gaviao} alt="Imagem de um aguia" width={180} height={150}/>
      </div>
    </>
  );
};

export default IconsCentral;
