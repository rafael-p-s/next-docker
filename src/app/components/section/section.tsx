"use client";
// Icons
import gramaticaIcon from "../../../../public/icons/gramatica.png";
import jogosIcon from "../../../../public/icons/jogos.png";
import vocabularioIcon from "../../../../public/icons/vocabulario.png";

// Components
import Image from "next/image";

export default function Section() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-row justify-center items-center mt-[10rem] mb-[5rem] gap-12">
      <button onClick={() => scrollToSection("grammar")}>
        <Image src={gramaticaIcon} alt="Gramática" width={100} height={136} />
      </button>

      <button onClick={() => scrollToSection("gameplay")}>
        <Image src={jogosIcon} alt="Jogos" width={100} height={136} />
      </button>

      <button onClick={() => scrollToSection("vocabulary")}>
        <Image
          src={vocabularioIcon}
          alt="Vocabulário"
          width={100}
          height={136}
        />
      </button>
    </div>
  );
}
