"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const experience = [
  {
    icon: "/icons/ic_high_chart.svg",
    title: "High Quality Performance",
    desc: "Delivering exceptional performance with a focus on efficiency and reliability to meet enterprise demands.",
  },
  {
    icon: "/icons/ic_down_chart.svg",
    title: "Reduce Risks and Costs",
    desc: "Minimize operational risks and optimize costs with strategic planning and innovative solutions.",
  },
  {
    icon: "/icons/ic_connectivity.svg",
    title: "Connectivity and Responsiveness",
    desc: "Ensure seamless connectivity and responsive systems to enhance user experiences and real-time interactions.",
  },
  {
    icon: "/icons/ic_focus.svg",
    title: "Focus on Main Business",
    desc: "Streamline processes and focus on core business objectives to achieve long-term success and growth.",
  },
  {
    icon: "/icons/ic_integrity.svg",
    title: "Integrity and Compliance",
    desc: "Maintain the highest standards of integrity and ensure compliance with industry regulations and policies.",
  },
  {
    icon: "/icons/ic_clock.svg",
    title: "Full Time Availability",
    desc: "Offer round-the-clock availability to address needs promptly and ensure uninterrupted services.",
  },
];

const competences = [
  {
    title: ".NET",
    desc: "TSM teams widely apply .NET framework by Microsoft for projects and assignments from ASP.NET web development tasks to the complex distributed systems involving extensive database infrastructure. Our .NET teams consist of engineers of all specialization (GUI development, networking, or database architecture) and may include QA specialists, business analysts, tech writers, and project manager.",
    icon: "",
    fundamental: "C#",
    framework: "ASP.Net, ASP.Net Core, MVC",
    database: "SQL Server, Oracle",
    tools: "Crystal Report, SAP Report, SSRS",
  },
  {
    title: "Java",
    desc: "Creating Rich And Scalable Java Applications That Add Value To Your Business. We, at TSM, have carved a niche in the field of delivering customer-centric, scalable and business-focused Java development services for several enterprises and organizations. We have catered to clients across various industry verticals such as automotive, banking, e-commerce, real-estate, finance, entertainment, software development, healthcare etc.",
    icon: "java-icon.png",
    fundamental: "Java",
    framework: "Spring, Hibernate",
    database: "SQL Server, MySQL",
    tools: "Crystal Report, Jasper Report, Telerik",
  },
  {
    title: "FrontEnd Developer",
    desc: "TSM providing you with experienced developers for creating a part of a website that users interact with directly, more commonly known as the client-side of the application, which runs in web browsers on their devices.",
    icon: "frontend-icon.png",
    fundamental: "HTML, CSS & JavaScript",
    framework: "React, Angular or Vue",
    tools: "Git, VS Code & Figma",
  },
  {
    title: "Business Intelligence",
    desc: "Natural language processing tool that interprets data and offers insights. It processes large amounts of data and converts it into usable information by suggesting conclusions, making inferences, and giving recommendations. It provides precise calculations based on complex algorithms and advanced machine learning to give you the upper hand in the business world.",
    icon: "business-intelligence-icon.png",
    fundamental: "DAX (Tabular Model), MDX (Multidimensional Model), SQL",
    framework: "RDMS Database",
    tools: "SharePoint, Spotfire, Tableau, Power BI & Pivot, SSRS",
  },
  {
    title: "System Analyst/Business Analyst",
    desc: "The role of a System Analyst/Business Analyst encompasses the critical function of analyzing and interpreting complex business processes, user needs, and technological systems, facilitating the development and implementation of strategic solutions to enhance organizational efficiency and meet business objectives.",
    jobdesc: [
      "Testing application based on FSD",
      "Create UAT Scenario & Script",
      "UAT Internal and External",
      "Monitoring the software engineering processes to ensure quality of application",
      "Utilize QA automation tools",
    ],
  },
  {
    title: "Automation",
    desc: "Developer that works to design, develop, and test the workflow automation. Automation developer works cross-functionally with business operations and business analysts to create and optimize workflow processes.",
    jobdesc: [
      "Create Process Definition Document (PDD)",
      "Create Automation Robot based on PDD",
      "UAT Internal and External",
      "Setup License",
    ],
  },
];

const Product = () => {
  const knowledgeRef = useRef(null);

  const scrollToKnowledge = () => {
    knowledgeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section>
        <div className="bg-profesional h-[94dvh] bg-cover relative">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="container flex flex-col justify-center items-center h-full gap-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-white">IT Services & Solutions</h1>
                <div className="h-1 w-5/6 bg-white" />
              </div>
              <p className="text-white text-center">
                An integrated information & technology system provider,
                dedicated to delivering <br className="hidden md:block" />{" "}
                highly effective solutions in the field of Information Systems.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <button
                className="btn btn-primary z-0 py-[14px]"
                onClick={scrollToKnowledge}
              >
                More Info
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        ref={knowledgeRef}
        id="knowledge"
        className="section bg-theme-light bg-pattern-1 bg-cover min-h-screen flex items-center"
      >
        <div className="container">
          <div className="flex flex-col gap-4">
            <h3 className="text-center">
              Extensive{" "}
              <span className="bg-primary text-white px-2 ">Knowledge</span> and{" "}
              <span className="bg-primary text-white px-2">Experience</span>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="text-center"
            >
              Our outsourcing solutions can assist you in handling excess
              workloads, improve service performance and offer increased levels
              of flexibility in workforce management, Having subject-matter and
              technical knowledge as well as proven, tools, out expertise are
              able to complete event the most demanding tasks or projects.
            </motion.p>

            <div className="section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 * index,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="max-w-sm p-4 bg-white/80 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col items-center"
                >
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    alt={item.title}
                  />
                  <h5 className="text-h5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="flex flex-col items-center gap-4">
          <h3>Competences</h3>

          <div className="section mx-2 flex flex-col items-center gap-20">
            {competences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 * index,
                }}
                viewport={{
                  once: true,
                }}
                className={`flex flex-col gap-8 items-center lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2 flex flex-col gap-4">
                  <div className="w-max">
                    <h4 className="text-primary">{item.title}</h4>
                    <div className="h-1 bg-primary w-5/6" />
                  </div>
                  <p>{item.desc}</p>
                </div>
                <div className="w-full lg:w-1/2 p-6 bg-white  rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 ">
                  <div className="flex flex-col gap-2">
                    {item.fundamental && (
                      <div className="flex flex-col">
                        <p>Programming Language</p>
                        <h5>{item.fundamental}</h5>
                      </div>
                    )}
                    {item.framework && (
                      <div className="flex flex-col">
                        <p>Framework</p>
                        <h5>{item.framework}</h5>
                      </div>
                    )}
                    {item.database && (
                      <div className="flex flex-col">
                        <p>Database</p>
                        <h5>{item.database}</h5>
                      </div>
                    )}
                    {item.tools && (
                      <div className="flex flex-col">
                        <p>Reporting Tools</p>
                        <h5>{item.tools}</h5>
                      </div>
                    )}
                    {item.jobdesc && (
                      <div className="flex flex-col">
                        <p>Jobdesk</p>
                        <ul>
                          {item.jobdesc.map((item, idx) => (
                            <li key={idx} className="font-bold text-black">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
