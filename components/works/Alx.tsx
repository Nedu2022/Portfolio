import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Alx = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full "
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Software Engineer Intern <span className="text-textGreen tracking-wide"> @ALX</span> </h3>
      <p className="text-sm mt-1 font medium text-textDark">August  2022 - Present</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborate with cross-functional teams of developers to design and create web applications, and support software applications.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Play an integral role in implementing web Development solutions, effectively translating project requirements into visually appealing and functional web applications that enhance user experience.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Enhance existing code, address project requests, and resolve bugs.
        </li>
      </ul>

     
    </motion.div>
  )
}

export default Alx
