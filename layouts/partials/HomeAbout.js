import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const HomeAbout = ({ about }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>{markdownify(about.title)}</h2>
        </div>
        {/* <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        <div className="mt-8 grid gap-x-8 gap-y-6">
          <div className="text-center">
            <p className="text-lg">{markdownify(about.description)}</p>
          </div>
          <div className="about flex items-center">
            <div className="w-[30%] justify-items-end">
              <Image src={about.image} width={300} height={300} />
            </div>
            <div className="w-[70%]">
              <div className="vision">
                {/* <h2 className="text-xl leading-8 bg-primary text-white p-2 pr-4 inline-block border-l-8 border-grey">Our Vision</h2> */}
                <h2 className="text-xl leading-8 pr-6 py-2 inline-block border-b-4 border-primary">Our Vision</h2>
                <p className="text-lg mt-2">{markdownify(about.vision)}</p>
              </div>
              <div className="mission mt-6">
                {/* <h2 className="text-xl leading-8 bg-primary text-white p-2 pr-4 inline-block border-r-8 border-grey">Our Mission</h2> */}
                <h2 className="text-xl leading-8 pl-6 py-2 inline-block border-b-4 border-primary">Our Mission</h2>
                <p className="text-lg mt-2">{markdownify(about.mission)}</p>
              </div>
            </div>
          </div>
          {/* {feature.features.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={`feature-${i}`}
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
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
