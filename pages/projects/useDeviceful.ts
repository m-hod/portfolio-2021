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
              // initialDeviceOrientation: 90,
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
      // device.open();
      // device.swivel({
      //   to: -30, // in degrees
      //   duration: 1000, // in milliseconds
      // });
      //   return () => {
      //     device.unmount();
      //   };
    }
  }, [device]);

  return device;
}

export default useDeviceful;
