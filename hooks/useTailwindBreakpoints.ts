import { useEffect, useMemo, useState } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config.js';
import useResizeListener from './useResizeListener';

const config = resolveConfig(tailwindConfig);

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export default function useTailwindBreakpoints(): {
  breakpoint: Breakpoints;
  size: number;
} {
  const { width } = useResizeListener();

  return useMemo(() => getBreakpoint(width), [width]);
}

function getBreakpoint(width: number) {
  switch (true) {
    case width <= parseFloat(config.theme.screens['sm']):
      return {
        breakpoint: 'sm' as Breakpoints,
        size: parseFloat(config.theme.screens['sm']),
      };
    case width <= parseFloat(config.theme.screens['md']):
      return {
        breakpoint: 'md' as Breakpoints,
        size: parseFloat(config.theme.screens['md']),
      };
    case width <= parseFloat(config.theme.screens['lg']):
      return {
        breakpoint: 'lg' as Breakpoints,
        size: parseFloat(config.theme.screens['lg']),
      };
    case width <= parseFloat(config.theme.screens['xl']):
      return {
        breakpoint: 'xl' as Breakpoints,
        size: parseFloat(config.theme.screens['xl']),
      };
    default:
      return {
        breakpoint: '2xl' as Breakpoints,
        size: parseFloat(config.theme.screens['2xl']),
      };
  }
}
