"use client";

import { motion } from "framer-motion";

import { StartSteps, TitleText, TypingText } from "../components";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-0`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-row flex-col mx-auto gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-col flex-[0.75] justify-center"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="max-w-[370px] flex flex-col mt-[31px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? "0" : ""}${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
