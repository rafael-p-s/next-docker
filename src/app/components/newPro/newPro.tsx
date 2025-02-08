// Components
import Image from "next/image";

// Icons
import newbieIcon from "../../../../public/icons/newbie.png";
import proIcon from "../../../../public/icons/pro.png";

export default function NewPro() {
  return (
    <>
      <div className="flex flex- justify-center items-center mt-6 gap-20">
        <Image src={newbieIcon} alt="" width={150} height={150} />
        <h3 className="text-center text-lg max-w-md w-[11.5rem] italic font-bold">
          Conquiste sua propria evolução, do modo que mais lhe agrada e no seu
          tempo...
        </h3>
        <Image src={proIcon} alt="" width={250} height={300} />
      </div>
    </>
  );
}
