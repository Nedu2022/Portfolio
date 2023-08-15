import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Alx from "./works/Alx";
import Haap from "./works/Haap";
import Ypf from "./works/Ypf";

const Experience = () => {
  const [workAlx, setWorkAlx] = useState(true);
  const [workHaap, setWorkHaap] = useState(false);
  const [workYpf, setWorkYpf] = useState(false);

  const handleAlx = () => {
    setWorkAlx(true);
    setWorkHaap(false);
    setWorkYpf(false);
  };

  const handleHaap = () => {
    setWorkAlx(false);
    setWorkHaap(true);
    setWorkYpf(false);
  };

  const handleYpf = () => {
    setWorkAlx(false);
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
            onClick={handleAlx}
            className={`${workAlx
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ALX
          </li>
          <li
            onClick={handleHaap}
            className={`${workHaap
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Haap
          </li>
          <li
            onClick={handleYpf}
            className={`${workYpf
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            YPF
          </li>
        </ul>
        {workAlx && <Alx />}
        {workHaap && <Haap />}
        {workYpf && <Ypf />}
      </div>
    </section>
  );
};

export default Experience;
