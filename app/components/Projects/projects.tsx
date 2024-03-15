"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    // 50% on small screens and 33% on larger screens.
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
          <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
          <Project {...project} />
          </CarouselItem>
          ))}
          
        </CarouselContent>
        <CarouselPrevious />
       <CarouselNext />
      </Carousel>
      </div>

      <div className="mt-12"></div>
      <div>
        <Carousel
        opts={{
          align: "end",
        }}
        className="w-full max-w-5xl">

          
        
          <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
            <Project {...project} />
            </CarouselItem>
            ))}
            
          </CarouselContent>
          <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>
    </section>
      
  );
}
