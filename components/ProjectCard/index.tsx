import { FaGithub, FaGlobe } from 'react-icons/fa';

import AnimationContainer from 'components/AnimationContainer';
import { Project } from 'res/types';
import React from 'react';
import classes from './index.module.scss';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="my-2">
      <AnimationContainer type="fade">
        <div
          className={`group h-56 hover:h-screen-50 w-full bg-center bg-cover shadow-md hover:shadow-xl transition-all cursor-pointer flex items-end relative ${classes.container}`}
        >
          <div className="w-full bg-black bg-opacity-50 p-2 flex flex-col justify-center">
            <div className="flex justify-between">
              <div>
                <h4 className="text-lg text-white">{project.title}</h4>
                <h4 className="text-white italic font-serif">
                  {project.tech.map((_tech, i) => (
                    <React.Fragment key={i}>{`${_tech}${
                      i !== _tech.length - 1 && i !== project.tech.length - 1
                        ? ', '
                        : ''
                    }`}</React.Fragment>
                  ))}
                </h4>
              </div>
              <div className="flex items-center">
                <a
                  className="mx-2 hover:opacity-75"
                  href={project.url}
                  target="_blank"
                >
                  <FaGlobe color="#FFF" size={24} />
                </a>
                {project.source && (
                  <a
                    className="mx-2 hover:opacity-75"
                    href={project.source}
                    target="_blank"
                  >
                    <FaGithub color="#FFF" size={24} />
                  </a>
                )}
              </div>
            </div>

            <p
              className={`text-white font-serif md:w-3/4 ${classes.description}`}
            >
              | &nbsp; {project.description}
            </p>
          </div>
          <div
            className={`absolute h-full w-full inset-0 bg-center bg-cover filter ${classes.background}`}
            style={{
              zIndex: -1,
              backgroundImage: `url(${project.image_path})`,
            }}
          />
        </div>
      </AnimationContainer>
    </div>
  );
}
