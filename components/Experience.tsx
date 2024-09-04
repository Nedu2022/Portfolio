import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Alx from "./works/Alx";
import Haap from "./works/Haap";
import Ypf from "./works/Ypf";
import Swap from "./works/SwapSpace";

const Experience = () => {
  const [workSwap, setWorkSwap] = useState(true);
  const [workAlx, setWorkAlx] = useState(false);
  const [workHaap, setWorkHaap] = useState(false);
  const [workYpf, setWorkYpf] = useState(false);

  const handleSwap = () => {
    setWorkSwap(true);
    setWorkAlx(false);
    setWorkHaap(false);
    setWorkYpf(false);
  };

  const handleAlx = () => {
    setWorkAlx(true);
    setWorkSwap(false);
    setWorkHaap(false);
    setWorkYpf(false);
  };

  const handleHaap = () => {
    setWorkAlx(false);
    setWorkSwap(false);
    setWorkHaap(true);
    setWorkYpf(false);
  };

  const handleYpf = () => {
    setWorkAlx(false);
    setWorkSwap(false);
    setWorkHaap(false);
    setWorkYpf(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNumber="02" />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="gap-2 md:w-32 flex flex-col ">
        <li
            onClick={handleSwap}
            className={`${workSwap
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-2 font-medium`}
          >
            Swap Space
          </li>
          <li
            onClick={handleAlx}
            className={`${workAlx
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-2 font-medium`}
          >
            ALX
          </li>
          <li
            onClick={handleHaap}
            className={`${workHaap
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-2 font-medium`}
          >
            Haap
          </li>
          <li
            onClick={handleYpf}
            className={`${workYpf
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-2 font-medium`}
          >
            YPF
          </li>
        </ul>
        {workAlx && <Alx />}
        {workHaap && <Haap />}
        {workYpf && <Ypf />}
        {workSwap && <Swap />}
      </div>
    </section>
  );
};

export default Experience;
