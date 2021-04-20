import { DevicefulType, Project as ProjectType } from 'res/types';
import React, { useEffect, useMemo, useState } from 'react';

import Page from 'components/page';
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
      <div className="h-screen flex flex-col justify-between">
        <div />
        <div className="flex">
          <DevicefulWrapper project={project} device={phone} type="phone" />
          <DevicefulWrapper project={project} device={laptop} type="laptop" />
        </div>
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
      className="w-full"
      style={{ height: '50vh' }}
      onClick={() => {
        if (device.isOpen) {
          device.close();
        } else {
          device.open();
        }
      }}
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
