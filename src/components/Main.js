import React from "react";
import Supervisor from "../assets/images/icon-supervisor.svg";
import Teambuilder from "../assets/images/icon-team-builder.svg";
import Karma from "../assets/images/icon-karma.svg";
import Calculator from "../assets/images/icon-calculator.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <main>
      <motion.section
        className="side-container"
        initial={{ x: "-50vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.div
          drag={isMobile ? false : true}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.5}
          className="card supervisor"
        >
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <figure>
            <img draggable="false" src={Supervisor} alt="Supervisor Icon" />
            <figcaption className="offscreen">Superviser Icon</figcaption>
          </figure>
        </motion.div>
      </motion.section>
      <section className="center-container">
        <motion.div
          drag={isMobile ? false : true}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.5}
        >
          <motion.div
            className="card team-builder"
            initial={{ x: "-50vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <figure>
              <img draggable="false" src={Teambuilder} alt="Team Builder Icon" />
              <figcaption className="offscreen">Team Builder Icon</figcaption>
            </figure>
          </motion.div>
        </motion.div>
        <motion.div
          drag={isMobile ? false : true}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.5}
        >
          <motion.div
            className="card karma"
            initial={{ x: "50vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <figure>
              <img draggable="false" src={Karma} alt="Karma Icon" />
              <figcaption className="offscreen">Karma Icon</figcaption>
            </figure>
          </motion.div>
        </motion.div>
      </section>
      <motion.section
        className="side-container"
        initial={{ x: "50vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.div
          className="card calculator"
          drag={isMobile ? false : true}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.5}
        >
          <h2>Calculator</h2>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <figure>
            <img draggable="false" src={Calculator} alt="Calculator Icon" />
            <figcaption className="offscreen">Calculator Icon</figcaption>
          </figure>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Main;
