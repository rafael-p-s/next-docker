"use client";
import Image from "next/image";
import Logozoolingo from "../../icons/Logozoo.png";

const ZoolingoLogo: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image src={Logozoolingo} alt="Zoolingo Logo" width={500} height={500}
        />
      </div>
      <div className="flex justify-center text-[2rem]">
        <p>uma plataforma para aprender idiomas de uma maneira divertida.</p>
      </div>
    </>
  );
};

export default ZoolingoLogo;
