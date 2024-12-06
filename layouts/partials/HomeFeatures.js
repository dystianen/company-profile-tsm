"use client";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeFeatures = ({ feature }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {markdownify(feature.title)}
          </motion.h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {feature.features.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 * index }}
              viewport={{ once: true }}
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={`feature-${index}`}
            >
              {item.icon && (
                <Image
                  className="mx-auto"
                  src={item.icon}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
              <div className="mt-4">
                {markdownify(item.name, "h3", "h5")}
                <p className="mt-3">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
