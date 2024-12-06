"use client";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { motion } from "framer-motion";

const Workflow = ({ workflow }) => {
  return (
    <section className="section pb-0">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        {markdownify(
          workflow.title,
          "h2",
          "mx-auto max-w-[400px] font-bold leading-[44px]"
        )}
        {markdownify(workflow.description, "p", "mt-3")}
      </motion.div>
      <Image
        src={workflow.image}
        alt="workflow image"
        width={1920}
        height={296}
      />
    </section>
  );
};

export default Workflow;
