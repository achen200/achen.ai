"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  SwatchIcon,
  ServerStackIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "I'm proficient with JavaScript, HTML/CSS and familiar with frameworks such as React, Angular, and Bootstrap.",
  },
  {
    icon: ServerStackIcon,
    title: "Development Operations",
    children:
      "I'm well-versed in Agile, Scrum methodology and experienced with CI/CD pipelines, unit testing, Git(Hub)",
  },
  {
    icon: SwatchIcon,
    title: "Machine Learning",
    children:
      "I have experience with forecasting, natural language processing, neural networks, and deep learning using Python, C++, Pytorch, Tensorflow, and MATLAB",
  },
  {
    icon: CpuChipIcon,
    title: "Computer Architecture",
    children:
      "I'm familiar with signal processing, FPGA/VLSI digital design, processor architecture and experienced with x86, ARM, Verilog, ModelSim, and Quartus",
  },
];

export function Skills() {
  return (
    <section className="py-28 px-8" id="SkillSection">
      <div className="container mx-auto mt-0 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Skills
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
