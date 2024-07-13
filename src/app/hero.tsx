"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8" id="HomeSection">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Portofolio
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Anthony Chen, a UCSD Computer Science graduate
            with a passion for building projects and exploring new ideas.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Button color="gray" className="w-full px-4 md:w-[12rem]"
                onClick={()=>{
                  window.location.href = '#ResumeSection';
                }}
              >
                Resume
              </Button>
              <Button color="gray" className="w-full px-4 md:w-[12rem]"
                onClick={()=>{
                  window.location.href = '#PortfolioSection';
                }}
              >
                Projects
              </Button>
              <Button color="gray" className="w-full px-4 md:w-[12rem]"
                onClick={()=>{
                  window.location.href = '#ContactSection';
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          alt="Me"
          src="/image/avatar_me.jpg"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
