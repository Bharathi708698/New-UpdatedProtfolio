import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="lgl:w-full w-full">
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2023-Present
            </p>
            <h2 className="text-2xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-14 lgl:h-[400px] ">
            <EducationCard
              title="ZustPe Payments Private Limited"
              subTitle="Fullstack MERN Developer"
            />
          </div>
        </div>
        <div className=" lgl:w-full w-full">
          <div className="py-12 font-titleFont">
            {/* <p className="text-sm text-designColor tracking-[4px]">2014-2021</p> */}
            <h2 className="text-2xl md:text-4xl font-bold">
              Technical Knowledge
            </h2>
          </div>
          <div
            className="mt-14 lgl:mt-1 w-full lgl:w-full h-[700px] border-l-[6px] border-l-black
                 border-opacity-30 flex flex-col gap-5"
          >
            <ExperienceCard
              subTitle="Developed lightweight applications optimized for
              scalability and performance"
            />
            <ExperienceCard
              subTitle="Crafted superior user experiences for consumer-focused
                websites using HTML, CSS, React.js, and Node.js."
            />
            <ExperienceCard
              subTitle="Implemented robust authentication flows to protect user
                data with asymmetric encryption."
            />
            <ExperienceCard
              subTitle="Designed efficient database schemas, normalized data
                structures, and enforced unique constraints."
            />
            <ExperienceCard
              subTitle="Developed and deployed complex backend systems, web
                applications across multiple APIs, and third-party integrations."
            />
            <ExperienceCard
              subTitle="Ensured data integrity and prevented redundant
                information through meticulous database design"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
