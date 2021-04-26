import { DevicefulType, Project as ProjectType } from 'res/types';
import React, { useEffect, useMemo, useState } from 'react';

import Page from 'components/page';
import RaisedCard from 'components/RaisedCard';
import classes from './project.module.scss';
import { projects } from 'res/data';
import useDeviceful from 'pages/projects/useDeviceful';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  const project = useMemo(() => {
    if (router.query.project) {
      return projects.find(
        (_project) => _project.id === Number(router.query.project)
      );
    }
    return undefined;
  }, [router.query]);

  useEffect(() => {
    if (router.query.project && !project) {
      router.push('/404');
    }
  }, [router.query.project, project]);

  const laptop = useDeviceful('laptop', project);
  const phone = useDeviceful('phone', project);

  if (!project) {
    return null;
  }

  return (
    <Page>
      <div className="h-screen w-full flex items-center justify-between relative">
        <div className="h-screen-75 w-screen-25 z-10">
          <RaisedCard>
            <h2>About</h2>
          </RaisedCard>
        </div>
        <div
          className={`${classes.device} absolute w-full hover:scale-110 transition-all`}
        >
          <DevicefulWrapper project={project} device={laptop} type="laptop" />
        </div>
        <div className="h-screen-75 w-screen-25 z-10">
          <RaisedCard>
            <h2>About</h2>
          </RaisedCard>
        </div>

        {/* <div className={classes.grid}>
          <div className={classes.logo} />
          <div className={classes.header} />
          <div className={classes.content} />
          <div className={classes.device}>
            <div className="w-full h-full flex justify-end items-end">
               <DevicefulWrapper project={project} device={phone} type="phone" /> 
              <DevicefulWrapper
                project={project}
                device={laptop}
                type="laptop"
              />
            </div>
          </div>
        </div> */}
      </div>
    </Page>
  );
}

function DevicefulWrapper({
  device,
  project,
  type,
}: {
  device: any;
  project: ProjectType;
  type: DevicefulType;
}) {
  return (
    <div
      id={`${type}-${project.id}`}
      className={`w-full h-screen-25 sm:h-screen-50 ${classes.x}`}
      onMouseEnter={() => {
        if (device) {
          device.scroll({
            direction: 'down', // 'up' or 'down'
            duration: 5000, // in milliseconds
            easing: 'easeOutQuad', // default
          });
        }
      }}
      onMouseLeave={() => {
        if (device) {
          device.scroll({
            direction: 'up', // 'up' or 'down'
            duration: 5000, // in milliseconds
            easing: 'easeOutQuad', // default
          });
        }
      }}
    />
  );
}
