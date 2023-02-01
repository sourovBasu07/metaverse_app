"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText
          title={<>Insights about Metaverse</>}
          textStyles="text-center"
        />
        <div className="flex flex-col mt-[50px] gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
