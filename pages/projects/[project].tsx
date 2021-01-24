import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import Page from 'components/page';
import { projects } from 'res/data';

//https://gist.github.com/jcquinlan/14fcaf3be3167c5caab9a3fd86fd09b7

/**
 {
    test: /\.(js|mjs)$/,
    exclude: /@babel(?:\/|\\{1,2})runtime/,
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      configFile: false,
      compact: false,
      presets: [
        [
          require.resolve('babel-preset-react-app/dependencies'),
          { helpers: true },
        ],
      ],
      cacheDirectory: true,
      // See #6846 for context on why cacheCompression is disabled
      cacheCompression: false,
      
      // Babel sourcemaps are needed for debugging into node_modules
      // code.  Without the options below, debuggers like VSCode
      // show incorrect code and set breakpoints on the wrong lines.
      sourceMaps: shouldUseSourceMap,
      inputSourceMap: shouldUseSourceMap,
    },
  },
 */

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

  useEffect(() => {
    async function importDeviceful() {
      const Deviceful = (await import('deviceful')).default;
      const device = new Deviceful({
        device: 'laptop',
      });
      device.mount();
    }
    importDeviceful();
  }, []);

  if (!project) {
    return null;
  }

  return (
    <Page>
      <div id="deviceful" style={{ height: '100vh' }}></div>
    </Page>
  );
}
