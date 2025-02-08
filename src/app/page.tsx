"use client";
// Components
import NavBar from "./components/navbar/navbar";
import Image from "next/image";
import NewPro from "./components/newPro/newPro";
import IconsText from "./components/iconsText/iconsText";
import IconsTextRight from "./components/iconsTextDireita/iconsTextDireita";

// icons
import zoolingoIcon from "../../public/icons/zoolingo.png";
import Section from "./components/section/section";
import gramaticaIcon from "../../public/icons/gramatica.png";
import jogosIcon from "../../public/icons/jogos.png";
import vocabularioIcon from "../../public/icons/vocabulario.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffe1b6]">
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-2">
        <Image src={zoolingoIcon} alt="" width={600} height={400} />
        <p className="italic font-bold text-2xl">
          uma plataforma para aprender idiomas de uma maneira divertida.
        </p>
        <NewPro />
        <Section />
        <IconsText
          idSection="grammar"
          imgSRC={gramaticaIcon}
          textArea="Aprenda gramática de maneira fácil e animada, com desafios.
          Definidos por nivel."
        />
        <IconsTextRight
          idSection="gameplay"
          imgSRC={jogosIcon}
          textArea="Teste seus conhecimentos com jogos interativos."
        />
        <IconsText
          idSection="vocabulary"
          imgSRC={vocabularioIcon}
          textArea="Aumente seu vocabulário, escolhendo o tema que está procurando."
        />
      </div>
    </div>
  );
}

