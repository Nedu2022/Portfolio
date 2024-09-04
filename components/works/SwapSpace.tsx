import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Swap = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full "
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Front-End Developer <span className="text-textGreen tracking-wide"> @Swap Space</span> </h3>
      <p className="text-sm mt-1 font medium text-textDark">Sept 2023 - Dec 2023</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I Developed and implemented high-quality, reusable frontend code using TypeScript and React.js, enhancing user engagement by 10%.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I Designed responsive and user-friendly UI components, ensuring consistency and accessibility across devices.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I Integrated Firebase for real-time updates and authentication, boosting user engagement by 30%.
        </li>
      </ul>

     
    </motion.div>
  )
}

export default Swap
