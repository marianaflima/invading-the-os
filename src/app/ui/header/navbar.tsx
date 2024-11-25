import Link from "next/link";
import OrcaBearLogo from "../orca-bear";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-white">
      <nav className="flex w-full">
        <OrcaBearLogo />

        <div className="flex flex-1 justify-end items-center max-sm:hidden">
          {["Sobre", "Personagens", "Cenario", "Gameplay"].map((nav) => (
            <div
              key={nav}
              className="px-5 text-xl cursor-pointer text-black font-semibold hover:text-orange-700 transition-all"
            >
              <Link href={"/"}>{nav}</Link>
            </div>
          ))}
        </div>
        <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
