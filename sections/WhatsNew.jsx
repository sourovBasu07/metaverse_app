"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures } from "../constants";
import { NewFeatures, TypingText, TitleText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-row flex-col mx-auto gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-col justify-center flex-[0.95]"
        >
          <TypingText title="| Whats new?" />
          <TitleText title={<>What's new about Metaversus</>} />
          <div className="flex justify-between flex-wrap mt-[48px] gap-[24px]">
            {newFeatures.map((feature, index) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
