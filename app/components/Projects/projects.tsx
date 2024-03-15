"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { projectsData, addnprojectsData } from "@/lib/data";
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

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    // 50% on small screens and 33% on larger screens.
    <>
    <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mohith2017"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      
      <div>
      <Carousel
      opts={{
        align: "end",
      }}
      className="w-full max-w-5xl">
      
        <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1 lg:basis-1/2" onClick={() => { window.location.href = project.githubUrl;}}>
          <Project {...project} />
          </CarouselItem>
          ))}
          
        </CarouselContent>
        <CarouselPrevious />
       <CarouselNext />
      </Carousel>
      </div>

      <div className="mt-12"></div>
      <SectionHeading>Hobby projects</SectionHeading>
      <div>
        <Carousel
        opts={{
          align: "end",
        }}
        className="w-full max-w-5xl">

          
        
          <CarouselContent>
          {addnprojectsData.map((addnproject, index) => (
            <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
            <Project {...addnproject} />
            </CarouselItem>
            ))}
            
          </CarouselContent>
          <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>
    </section>
    </>
  );
}
