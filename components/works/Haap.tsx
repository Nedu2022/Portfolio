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
      <p className="text-sm mt-1 font medium text-textDark">Oct 2021 - August 2023</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I Developed and enhanced the UI of a scalable consumer product using Next.js, TypeScript, and Redux.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated styled-components for efficient CSS-in-JS management, improving the overall maintainability of the codebase.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
         I Led the effort to refactor and optimize frontend code, resulting in a smoother user experience and better developer productivity.
        </li>
      </ul>
    </motion.div>
  )
}

export default Haap;
