import React from "react";
import laptopImage from "./../assets/projects/laptopApple.png";

const Projects = () => {
  return (
    <div className='m-10'>
      <div className='text-2xl text-center mb-8'>
      Projects
      </div>
      <div className="flex justify-center flex-wrap">

        <img src={laptopImage} alt="project_1" className="w-1/3 h-auto p-2"/>
        <img src={laptopImage} alt="project_1" className="w-1/3 h-auto p-2"/>
        <img src={laptopImage} alt="project_1" className="w-1/3 h-auto p-2"/>
        <img src={laptopImage} alt="project_1" className="w-1/3 h-auto p-2"/>
        <img src={laptopImage} alt="project_1" className="w-1/3 h-auto p-2"/>
        <img src={laptopImage} alt="project_1" className="w-1/3 h-auto p-2"/>
      </div>
    </div>
  );
};

export default Projects;
