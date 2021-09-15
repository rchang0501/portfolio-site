import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

import Head from "next/head"; 

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Ryan Chang | Resume | Software Developer</title>
      </Head>

      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Systems Design Engineering
            </h5>
            <p className="font-semibold">University of Waterloo (2021-2026)</p>
            <p className="my-3">
              I am currently a candidate for a Bachelor of Applied Science
              (BASc) in Systems Design Engineering from the University of
              Waterloo
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Lead Front-End Developer</h5>
            <p className="font-semibold">Ontario DECA</p>
            <p className="my-3">
              I redesigned and manged the website for Ontario DECA, the largest
              DECA associaition in the world with over 15,000 members
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
