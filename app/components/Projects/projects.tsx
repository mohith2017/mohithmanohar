"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { projectsData, addnProjectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <>
    <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mohith2017"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Open Source projects</SectionHeading>
      
      <div>
      <Carousel
      opts={{
        align: "end",
      }}
      className="w-full max-w-5xl">
      
      <CarouselPrevious />
        <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem key={index} className="flex justify-center items-center md:flex-col md:basis-1 lg:basis-1/2" onClick={() => { window.location.href = project.githubUrl;}}>
          <Project {...project} />
          </CarouselItem>
          ))}
          
        </CarouselContent>
        
       <CarouselNext />
      </Carousel>
      </div>

    

      <div className="mt-12"> </div>

        
    
      <div>
        <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-5xl">

          
        <CarouselPrevious />
          <CarouselContent>
          {addnProjectsData.map((addnproject, index) => (
            <CarouselItem key={index} className="flex justify-center items-center md:flex-col md:basis-1 lg:basis-1/2" onClick={() => { window.location.href = addnproject.githubUrl;}}>
            <Project {...addnproject} />
            </CarouselItem>
            ))}
            
          </CarouselContent>
          
        <CarouselNext />
        </Carousel>
      </div>
    </section>
    </>
  );
}
