import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Ypf = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full "
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Front-end Developer <span className="text-textGreen tracking-wide">@YPF</span> </h3>
      <p className="text-sm mt-1 font medium text-textDark">Nov 2020 – May 2021
</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and collaborated on building a Young Professional Forum web application, managing user information on the platform.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrated foundational knowledge of relevant software and industry standards, ensuring compliance with best practices and quality standards in the development process.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proficiently utilized technologies such as HTML, CSS, and JavaScript, while actively implementing QA practices and adhering to effective project management principles, to build visually appealing and user-friendly web applications that enhance the overall user experience.
        </li>
      </ul>
    </motion.div>
  )
}

export default Ypf;
