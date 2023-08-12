import { AiFillGithub } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Nedu2022" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiFillGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/chinedu-nwabuokei-02a7bb225/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {" "}<BsLinkedin />{" "}
          </span>
        </a>
        <a href="https://www.instagram.com/nnedu.n/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {" "}<BsInstagram />{" "}
          </span>
        </a>
        <a href="https://twitter.com/Jesse14887992" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {" "}<BsTwitter />{" "}
          </span>
        </a>
      </div>

      <div className="w-[2px] h-32 bg-textDark" />
    </div>
  );
};

export default LeftSide;
