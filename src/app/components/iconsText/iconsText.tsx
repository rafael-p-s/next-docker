"use client";

// Components
import Image from "next/image";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

type ComponentsProps = {
  imgSRC: StaticImageData;
  textArea: string;
  idSection: string;
};

export default function IconsText({ imgSRC, textArea, idSection }: ComponentsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById(idSection);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [idSection]);

  return (
    <div
      id={idSection}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="flex justify-start items-center gap-4 max-w-2xl mt-10 mb-16">
        <Image src={imgSRC} alt="Icon" className="w-30 h-30" />
        <p className="text-left text-2xl italic font-bold w-[35rem]">
          {textArea}
        </p>
      </div>
    </div>
  );
}
