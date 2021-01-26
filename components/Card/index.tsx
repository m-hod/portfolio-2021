import React from 'react';
import { Project } from 'res/types';
import { BsLaptop, BsPhone } from 'react-icons/bs';
import { BiGlobe } from 'react-icons/bi';
import Link from 'next/link';

export default function Card(props: Project) {
  return (
    <div
      className="relative m-2 shadow-md z-50 hover:cursor-pointer"
      style={{
        height: 500,
        maxHeight: '75vh',
        width: 250,
      }}
    >
      <div className="p-4 h-full flex flex-col justify-between items-center text-white">
        <div className="w-full mt-8 flex justify-center">
          <img src={props.icon} width={100} />
        </div>
        <div className="w-full">
          <h3 className="text-center text-lg font-bold">{props.title}</h3>
          <div className="mt-2 px-8 w-full flex justify-between">
            <Link href={props.url}>
              <a target="_blank" className="hover:text-gray-200">
                <BiGlobe size={20} />
              </a>
            </Link>
            <div>
              {(() => {
                switch (props.type) {
                  case 'mobile':
                    return <BsPhone size={20} />;
                  case 'web':
                    return <BsLaptop size={20} />;
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-full w-full top-0"
        style={{
          zIndex: -1,
          backgroundImage: `url(${props.image})`,
          backgroundPosition: 'center',
          filter: 'contrast(95%)',
        }}
      />
    </div>
  );
}
