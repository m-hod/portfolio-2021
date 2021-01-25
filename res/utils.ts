export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Tailwind screen breakpoints are number strings appended with 'px'
 * eg: "768px"
 */
export function extractTailwindBreakpoint(breakpoint: string) {
  return Number(breakpoint.slice(0, breakpoint.indexOf('px')));
}
