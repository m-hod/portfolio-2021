import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import Page from 'components/page';
import { projects } from 'res/data';
// import Deviceful from 'deviceful';
// console.log('deviceful', Deviceful);

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

  if (!project) {
    return null;
  }

  // const device = new Deviceful({
  //   device: 'laptop',
  // });
  // console.log(device);

  return (
    <Page>
      <div id="#deviceful"></div>
    </Page>
  );
}
