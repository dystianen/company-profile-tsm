"use client";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="container"
      >
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold">{banner.title}</h1>
            <p className="mt-4">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
            <Image
              className="mx-auto mt-12"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeBanner;
