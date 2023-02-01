"use client";

import { motion } from "framer-motion";

import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} flex flex-col mx-auto gap-8`}>
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="h-fil flex items-center bg-[#25618B] py-4 px-6 rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Enter Metaverse
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="h-[2px] bg-white mb-[50px] opacity-10" />
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white uppercase">
              Metaversus
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
