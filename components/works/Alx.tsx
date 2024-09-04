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
         I Collaborated with senior engineers to develop data-driven interfaces, increasing data visualization clarity by 15%.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized GCP for scalable backend services, resulting in a 25% performance improvement and supporting a 40% traffic increase.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to new features using Python and Django, leading to increased user adoption and satisfaction.
        </li>
      </ul>

     
    </motion.div>
  )
}

export default Alx
