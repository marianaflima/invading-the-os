"use client";
import "../global.module.css";
import VideoPlayer from "@/components/videoplayer";
import { inter } from "./ui/fonts";
import NavBar from "./ui/header/navbar";
import PhotoCard from "@/components/photocard";
import styles from "./stylesheet";

const HomePage = () => {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <NavBar />
      <section
        id="sobre"
        className="w-full flex flex-row bg-gray-50 text-black"
      >
        <main className="flex justify-between gap-6 bg-gray-50 text-black px-12 py-10 md:px-20">
          <div className="flex flex-col justify-start gap-4 md:w-1/2">
            <div className="flex gap-6 lg:grid-cols-4 sm:grid-cols-2">
              <h1
                className={`${inter.className} mb-4 text-xl text-black font-extrabold md:text-6xl`}
              >
                INVADING THE OS
              </h1>
            </div>
            <div className="flex flex-col gap-6 lg:grid-cols-4 sm:grid-cols-2">
              <p
                className={`${inter.className} text-xl text-black text-wrap font-semibold md:text-md md:leading-normal`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center pl-28  h-screen">
            <div className="w-[543] h-[520] border-hairline border-gray-300 rounded-lg flex justify-center items-center overflow-hidden">
              <img
                src="/placeholder-1.jpg"
                className="object-cover w-full h-full"
                alt="Orca"
              />
            </div>
          </div>
        </main>
      </section>
      <section id="personagens" className="bg-black">
        <main className="flex flex-col items-center justify-center gap-6 text-white px-12 py-5 md:px-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1
              className={`${inter.className} mb-4 text-xl font-extrabold md:text-6xl pt-7`}
            >
              Personagens
            </h1>
            <p
              className={`${inter.className} flex flex-wrap text-lg font-medium md:text-md text-wrap md:leading-normal pt-5 h-auto`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              flex: "row",
            }}
          >
            <PhotoCard
              cards={[
                {
                  imageSrc: "/placeholder-1.jpg",
                  title: "ORCA",
                  description: "Sed varius commodo tellus sit amet placerat. Etiam dignissim mi odio, id maximus mauris dictum id."
                },
                {
                  imageSrc: "/placeholder-2.jpg",
                  title: "ORCA",
                  description: "Sed varius commodo tellus sit amet placerat. Etiam dignissim mi odio, id maximus mauris dictum id."
                },
                {
                  imageSrc: "/placeholder-3.jpg",
                  title: "ORCA",
                  description: "Sed varius commodo tellus sit amet placerat. Etiam dignissim mi odio, id maximus mauris dictum id."
                },
              ]}
            />
          </div>
        </main>
      </section>
      <section
        id="cenario"
        className="w-full flex flex-row bg-gray-50 text-black"
      >
        <main className="flex flex-col items-center justify-center gap-6 px-12 py-10 md:px-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1
              className={`${inter.className} mb-4 text-xl font-extrabold md:text-6xl pt-7`}
            >
              Cenário
            </h1>
            <p
              className={`${inter.className} text-lg font-medium md:text-md text-wrap md:leading-normal pt-5 h-auto`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </main>
      </section>
      <section id="gameplay" className="w-full flex flex-row text-white">
        <main className="flex flex-col items-center justify-center gap-6 px-12 py-10 md:px-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1
              className={`${inter.className} mb-4 text-xl font-extrabold md:text-6xl pt-7`}
            >
              Gameplay
            </h1>
            <p
              className={`${inter.className} text-lg font-medium md:text-md text-wrap md:leading-normal pt-5 h-auto`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <VideoPlayer thumbnailSrc="/placeholder-3.jpg" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default HomePage;
