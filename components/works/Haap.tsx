import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Haap = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full "
    >
  <h3 className="flex gap-1 font-medium text-xl font-titleFont">Frontend Developer <span className="text-textGreen tracking-wide"> @Haap</span> </h3>
      <p className="text-sm mt-1 font medium text-textDark">Oct  2021 - Present</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrating a sophisticated comparison platform that allows users to effortlessly compare product specifications, prices, and customer reviews, helping them make informed purchasing decisions.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrate expertise in maintaining and enhancing Haap web applications through mindful refactoring, rigorous testing, code reviewing, and knowledge sharing, fostering a culture of continuous improvement.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work on different web application tasks using JavaScript frameworks such as React, and Next Js, ensuring optimal performance and user experience.
        </li>
      </ul>
    </motion.div>
  )
}

export default Haap;
