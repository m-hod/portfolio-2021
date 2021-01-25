import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import Page from 'components/page';
import { projects } from 'res/data';

export default function Project() {
  const router = useRouter();

  const project = useMemo(() => {
    if (router.query.project) {
      return projects.find(
        (_project) => _project.id === Number(router.query.project)
      );
    }
    return null;
  }, [router.query]);

  useEffect(() => {
    if (router.query.project && !project) {
      router.push('/404');
    }
  }, [router.query.project, project]);

  // useEffect(() => {
  //   async function importDeviceful() {
  //     const Deviceful = (await import('deviceful')).default;
  //     const device = new Deviceful({
  //       device: 'laptop',
  //     });
  //     device.mount();
  //   }
  //   importDeviceful();
  // }, []);

  if (!project) {
    return null;
  }

  return (
    <Page>
      <div id="deviceful" style={{ height: '100vh' }}></div>
    </Page>
  );
}
