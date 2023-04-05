import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import IconSkill from "./IconSkill";


const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <IconSkill icon={technology.icon}></IconSkill>
          </div>
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(Tech, "tech");
