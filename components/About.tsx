import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { nft } from "@/public/assets";


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
            As a skilled{" "}
            <span className="text-textGreen">Software Engineer</span>, I'm
            passionate about crafting elegant and efficient solutions in the
            world of software engineering. With a strong foundation in computer
            science and a knack for problem-solving, I thrive on turning complex
            challenges into innovative solutions. I have a deep love for clean,
            maintainable code and a keen eye for detail, which drives me to
            continuously refine my skills and stay up-to-date with the latest
            industry trends. Over the years, I've had the privilege of working
            on a variety of projects. I find joy in collaborating with
            cross-functional teams, sharing insights, and learning from others.
            My experience extends across front-end and back-end development,
            giving me a holistic understanding of the software development
            lifecycle. When I'm not immersed in code, you can find me exploring
            new technologies, experimenting with personal projects, and staying
            curious about emerging trends. I believe that great software not
            only solves problems but also enhances user experiences, and I'm
            dedicated to creating solutions that make a meaningful impact. I'm
            excited to continue my journey in software engineering, pushing
            boundaries, and contributing to innovative projects that shape the
            digital landscape. Let's connect and collaborate to bring
            exceptional ideas to life!"
          </p>

          <p>Technologies i work with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>React JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Next Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>HTML5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>CSS3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>Linux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>C/C++
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
