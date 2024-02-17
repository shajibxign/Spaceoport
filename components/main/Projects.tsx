import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="This is s visually stunning web project that utilizes Next.js with Three.js and Fiber, Node.js and Tailwind CSS for efficient styling. "
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="A dynamic web project that showcases my proficiency in building interactive and visually appealing user interfaces with React.js."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A cutting-edge 3D web development project showcasing the integration of several powerful technologies to create an impressive online portfolio."
        />
      </div>
    </div>
  );
};

export default Projects;