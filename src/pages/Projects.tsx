import React from "react";
import laptopImage from "./../assets/projects/laptopApple.png";

const Projects = () => {
  return (
    <div className='m-20 mt-32 flex justify-center'>
      <div>
      <p className='text-2xl flex justify-center'>Projects</p>
      </div>
      <div className="flex">
        <img src={laptopImage} alt="project_1" />
        <img src={laptopImage} alt="project_1" />
        <img src={laptopImage} alt="project_1" />
      </div>
    </div>
  );
};

export default Projects;
