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

export default function IconsTextRight({
  imgSRC,
  textArea,
  idSection,
}: ComponentsProps) {
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
      className={`transform transition-all duration-[2500ms] ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 max-w-lg mt-10 mb-16">
        <p className="text-left text-2xl italic font-bold w-[30rem]">
          {textArea}
        </p>
        <Image src={imgSRC} alt="Icon" className="w-30 h-30" />
      </div>
    </div>
  );
}
