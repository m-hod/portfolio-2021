import { GitHub, Globe } from 'react-feather';

import IconLink from 'components/IconLink';
import { Project } from 'res/types';
import React from 'react';
import Tab from 'components/Tab';

export default function Card(props: Project) {
  return (
    <div className="relative h-full w-full">
      <div className="p-8 md:p-16 h-full flex flex-col justify-center items-center text-white">
        {/* // responsive styles */}
        <div className="m-8 flex justify-center items-center bg-white rounded-full w-32 h-32 min-w-32 min-h-32 shadow-md">
          <img src={props.logo} width="75%" />
        </div>
        <div className="w-full ">
          <h3 className="text-center text-4xl font-bold">{props.title}</h3>
          <div className="m-4 flex flex-wrap justify-center">
            {props.tech.map((_tech, i) => (
              <Tab key={i} text={_tech} />
            ))}
          </div>
          <p className="italic font-serif">{props.description}</p>
          <div className="m-4 flex justify-center">
            {props.website && <IconLink link={props.website} Icon={Globe} />}
            {props.codebase && <IconLink link={props.codebase} Icon={GitHub} />}
          </div>
        </div>
      </div>
      <div
        className="absolute h-full w-full top-0"
        style={{
          zIndex: -1,
          backgroundImage: `url(${props.displayImage})`,
          backgroundPosition: 'center',
          filter: 'contrast(95%)',
        }}
      />
    </div>
  );
}
