import React from "react";
import Container from "../Elements/Container";
import { project } from "../../assets";

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect width="64" height="64" fill="white" />
      <path
        d="M24.0002 12.8008V17.9208H40.8706L11.2002 47.5912L14.8098 51.2008L44.4802 21.5304V38.4008H49.6002V12.8008H24.0002Z"
        fill="#222222"
      />
    </svg>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 p-2 bg-gray-400/10 rounded-xl w-full lg:w-[49%]">
      <div className="flex flex-row gap-4 md:flex-col justify-between md:w-1/3 relative">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-2">
            School <span className="text-[#FF8A00]">Library</span>
          </h1>
          <p className="text-sm text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Icon />
      </div>
      <img src={project} alt="project" className="md:w-2/3 rounded-xl" />
    </div>
  );
};

const ProjectSection = () => {
  return (
    <Container>
      <div className="py-16 text-center md:text-start">
        <p className="italic text-md text-white">Project Terbaru</p>
        <h1 className="text-4xl text-white font-bold">RECENT PROJECTS</h1>
      </div>
      <div className="flex flex-wrap justify-between gap-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
};

export default ProjectSection;
