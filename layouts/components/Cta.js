"use client";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left"
          >
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
