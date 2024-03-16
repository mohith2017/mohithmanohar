"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BlinkedBox } from "./ui/blinkedbox";
import toast from "react-hot-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card"

export default function Intro() {
  const { ref } = useSectionInView("Mohith", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const today = new Date();

  function handleClick(): void {

    //Change this for updating interviewing stage
    toast.success("Actively interviewing in initial stages at a few companies! \n Updated: Mar 15, 2024");
  }

  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            
            <Image
              src="https://i.postimg.cc/655kg0fy/IMG-7471.jpg"
              alt="Mohith portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center items-center text-sm text-gray-500 font-bold">Mobile friendly version coming soon</div>
      
      <motion.h1
        className="mb-10 mt-4 px-2 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm 
        <span className="font-bold"> Mohith.</span> I am a{" "}
        Software Engineer with a unique blend of{" "}
        <span className="font-bold">AI/ML, Gen AI and Full Stack</span> experience{" "}
        <span className="font-bold">for 3+ years</span>. I enjoy building products end to end using{" "}
        <span className="font-bold"> Python, JavaScript/TypeScript and Java </span>. 
        
        <span className="underline"></span>
        
      </motion.h1>
      

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Mohith_Manohar_Master.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/mohithmanoharcu"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mohith2017"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <div className="flex justify-end">
        <BlinkedBox className="text-xs text-white text-mt-4" onClick={handleClick} > Click Me</BlinkedBox>
        

        </div>
      </motion.div>
    </section>
  );
}
