"use client";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeAbout = ({ about }) => {
  return (
    <section className="section bg-theme-light">
      <div
        className="container"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {markdownify(about.title)}
          </motion.h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6">
          <div className="text-center">
            <p>{markdownify(about.description)}</p>
          </div>
          <div className="about flex flex-col items-center md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="md:w-[30%] md:justify-items-end w-full justify-items-center"
            >
              <Image src={about.image} width={300} height={300} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="md:w-[70%] w-full"
            >
              <div className="vision md:text-left text-center">
                <h2 className="text-xl leading-8 pr-6 inline-block">Our Vision</h2>
                <p className="mt-2">{markdownify(about.vision)}</p>
              </div>
              <div className="mission mt-4 md:text-left text-center">
                <h2 className="text-xl leading-8 pr-6 inline-block ">Our Mission</h2>
                <p className="mt-2">{markdownify(about.mission)}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
