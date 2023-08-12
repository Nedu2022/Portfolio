import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { nft, weatherImg } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNumber="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a frontend developer with 3 years of experience in React. I
            have a strong foundation in front-end development and am skilled in
            creating user-friendly and responsive web applications using React
            and its ecosystem. I have experience working on a variety of
            projects, including building and maintaining single page
            applications,{" "}
            <span className="text-textGreen">integrating with REST APIs</span>,
            and implementing responsive design principles. I am also proficient
            in using tools such as Webpack, npm, and Git for development and
            deployment. In addition to my technical skills, I am a strong
            communicator and team player.<span className="text-textGreen">
              {" "}I am able to work effectively with cross-functional teams and
              am comfortable taking on new challenges
            </span>{" "}
            and learning new technologies as needed. I am always looking to
            improve my skills and stay up-to-date with the latest best practices
            in web development. I am excited to continue growing as a developer
            and making meaningful contributions to projects and teams.
          </p>

          <p>Technologies i work with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Javascript
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>React JS
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Tailwind CSS
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Python
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Next Js
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>HTML5
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>CSS3
            </li>
            <li  className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>C
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={nft}
                alt="profileImg"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default About;
