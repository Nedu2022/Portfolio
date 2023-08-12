import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { weatherImg } from "@/public/assets";

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title="Projects I have Built" titleNumber="03" />
      {/* Project one */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div>
          <a href="">
          <div>
            <Image 
              className="w-full h-full object-contain"
              src={weatherImg}
              alt="weatherImg"
            />
            </div>
            </a>
        </div>
        <div></div>
      </div>
      {/* Project two */}
      {/* Project three */}
    </section>
  )
}

export default Projects;
