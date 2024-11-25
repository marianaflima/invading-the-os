import { inter } from "./fonts";
import Image from "next/image";

export default function OrcaBearLogo() {
  return (<div
    className={`${inter.className} flex flex-row items-center leading-none text-black cursor-pointer`}
  >
    <Image src="/orca.png" width={80} height={80} alt="Orca icon" />
    <p className="text-2xl font-bold">Orca |</p>
    <Image src="/bear.png" width={80} height={80} alt="Bear icon" />
    <p className="text-2xl font-bold">Bear</p>
  </div>);
}
