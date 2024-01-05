"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "B.S. in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Regents' Scholarship",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Magna Cum Laude",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24" id="ResumeSection">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Aspiring software engineer with background in algorithm design and
            machine learning. Experienced with working in teams in the industry.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
            onClick={()=>{
              window.open('/resume.pdf', "_blank");
            }}
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
