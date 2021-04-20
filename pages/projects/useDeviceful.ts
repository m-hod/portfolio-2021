//@ts-nocheck
import { DevicefulType, Project } from 'res/types';
import React, { useEffect, useState } from 'react';

// Places the deviceful object in an element with id of deviceful
function useDeviceful(type: DevicefulType, project: Project | undefined) {
  const [device, setDevice] = useState(null);

  const image =
    type === 'laptop' ? project?.images.web : project?.images.mobile;

  useEffect(() => {
    if (project && image) {
      // timeout to await for dom to load
      const timeout = setTimeout(() => {
        const importDeviceful = async () => {
          const Deviceful = await import('deviceful');
          setDevice(
            new Deviceful.default({
              parent: `#${type}-${project?.id}`,
              device: type,
              screenshot: image.url,
              screenshotHeight: image.height,
              enableFloor: false,
            })
          );
        };
        importDeviceful();
      }, 250);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [project]);

  useEffect(() => {
    if (device) {
      device.mount();
      //   return () => {
      //     device.unmount();
      //   };
    }
  }, [device]);

  return device;
}

export default useDeviceful;
