import Image from "next/image";
import SectionTitle from "./SectionTitle";
import {
  buriImg,
  cryptomania,
  weMap,
  haap,
  borderlands
} from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

// max-w-containerSmall mx-auto py-10 lgl:py-32
const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto py-10 lgl:px-28 py-32"
    >
      <SectionTitle title="Projects I have Built" titleNumber="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://b-watch.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={borderlands}
                  alt="BMovie"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">BMovie</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                A responsive web app built with React and Vite, featuring a hero
                slider for trending movies and scrollable movie lists.
                Integrated with an API to fetch and display movie data, the app
                delivers a fast and smooth user experience across devices.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React JS</li>
                <li>Tailwind CSS</li>
                <li>TMDB</li>
              </ul>
              <div className="text-2xl flex gap-4">
              <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Nedu2022/BMovie"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://b-watch.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://ui-frontend-nonxo.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={haap}
                  alt="Haap"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Haap</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                This is a real estate app serves multiple purposes, designed to
                meet the needs of various stakeholders in the real estate
                industry, including buyers, sellers, renters, agents, and
                property managers.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>TypeScript</li>
                <li>Next.Js</li>
                <li>Tailwind CSS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://ui-frontend-nonxo.vercel.app"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://cryptomania-hub.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={cryptomania}
                  alt="crypto"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cryptomania</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                This is a cryptocurrency react application with in-depth data
                about all crypto currencies crypto markets and popular crypto
                currency news
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React JS</li>
                <li>Redux</li>
                <li>Rapid API</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Nedu2022/cryptomania"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://cryptomania-hub.vercel.app"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://we-map.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={weMap}
                  alt="weatherImg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Weather Map(Desktop view only 🤪)
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                The Weather map, a dynamic website designed to provide visual
                representations of various meteorological data and information
                related to weather conditions over a specific geographical area.
                The Weather map provides a snapshot of the current weather
                conditions as well as forecasts for future time periods, helping
                to predict weather patterns and trends.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React Js</li>
                <li>TypeScript</li>
                <li>Weather-api</li>
                <li>Mapbox</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Nedu2022/weather-map"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://we-map.vercel.app"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project two */}

        {/* Project three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://buri.netlify.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={buriImg}
                  alt="buriImg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Buri App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                The app provides customers with an easy and convenient way to
                order Junk foods and other menu items from their smartphones or
                other devices. It eliminates the need to call or visit a
                physical store, making the ordering process faster and more
                accessible.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>SweetAlert</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Nedu2022/Buri.io"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://buri.netlify.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
