//Utilities
import { StaticImageData } from "next/image";
import Link from "next/link";

// Components
import Image from "next/image";

// Interface
type ImgProps = {
  imgSRC: StaticImageData;
  imgALT: string;
  linkRoute: string;
};

export default function LinkButton({ imgSRC, imgALT, linkRoute }: ImgProps) {
  return (
    <Link href={linkRoute}>
      <Image
        className="´-4"
        width={40}
        height={40}
        src={imgSRC}
        alt={imgALT}
      />
    </Link>
  );
}
