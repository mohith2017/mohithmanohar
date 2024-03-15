"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a <span className="font-bold"> Bachelors in{" "}
        Information Science and Engineering</span>, from India. 
        <br/>
        I worked for a year in AI in Security Engineering and then decided to pursue my passion in learning AI and Full Stack Development.{" "}
        <br/><br/>
        I started my <span className="font-bold"> Masters in Computer Science</span> at Columbia University, and worked on numerous project and research experiences in AI, Backend and Frontend Development.{" "} */}
        After graduating from my <span className="font-bold">Masters in Computer Science</span> from Columbia University, I decided to continue this. 
        I worked as a <span className="font-bold">Machine Learning engineer</span> building Machine learning models in the Cloud Services industry, then as a <span className="font-bold">Founding Software engineer</span> building AI oriented products end to end.

        <br/><br/> 
        I'm always excited to build new products that impact people. I am currently looking for a{" "}
        full-time position as a <span className="font-bold text-green-700">Software
        Engineer.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy hiking,
        going to the museum, watching movies, and playing video games. I also enjoy{" "}
        learning new things. I am currently
        learning about VisionOS based development{" "}
        history and philosophy. I also play the keyboard and basketball on the side.
      </p>
    </motion.section>
  );
}
