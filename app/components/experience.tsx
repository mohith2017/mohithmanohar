"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"


export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          
            <VerticalTimelineElement
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }} 
            key={index}
            >
              
                <Accordion type="single" collapsible className="w-full" 
                >
                <AccordionItem value="item-1" >
                  <AccordionTrigger >


                  <div className="flex flex-col justify-start gap-4 mr-8">
                  <Image src={item.logo} width="50" height="50" alt="Company logo" />
                  <h1>{item.company}</h1>          
                  </div>

                  <div className="flex flex-col">
                    
                 
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!font-normal text-gray-700 dark:text-white/75 !mb-4">
                      {item.description}
                    </p>
                    
                </div>
                </AccordionTrigger>
                <AccordionContent>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto mb-8">
                    {item.tags?.map((tag, index) => (
                      <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                <ul className="flex flex-wrap mt-8 gap-2 sm:mt-auto">
                      {item.bullets?.map((bullets, index) => (
                        <li
                          key={index}
                        >
                          <span className="mr-2">•</span>
                          {bullets}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </VerticalTimelineElement>
          
        ))}
      </VerticalTimeline>
    </section>
  );
}
