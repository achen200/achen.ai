"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/wallets.png",
    title: "Expense Tracker",
    desc: "Keep track of all your expenses and spending habits with this web app.",
    bdest: "https://expense-wallet-demo.netlify.app",
    bname: "View Project",
  },
  {
    img: "/image/snake.png",
    title: "Snake Game",
    desc: "Try to eat as many apples as you can without colliding into your own tail!",
    bdest: "https://github.com/achen200/SnakeGame",
    bname: "View Project",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="PortfolioSection">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-2">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
