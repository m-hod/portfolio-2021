import React, { useEffect, useMemo, useRef, useState } from 'react';

import classes from './index.module.scss';

// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from 'tailwind.config.js';

// import useTailwindBreakpoints from 'hooks/useTailwindBreakpoints';

// const config = resolveConfig(tailwindConfig);

function HorizontalCarousel({ children }: { children: React.ReactNode[] }) {
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const childrenContainer = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(Math.floor(children.length / 2));
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(0);

  // const breakpoint = useTailwindBreakpoints();

  // const pageMargins = useMemo(() => {
  //   if (typeof document === 'undefined') return 0;
  //   const padding = (() => {
  //     if (breakpoint.size > parseFloat(config.theme.screens['md'])) {
  //       return config.theme.padding['20'];
  //     }
  //     if (breakpoint.size > parseFloat(config.theme.screens['sm'])) {
  //       return config.theme.padding['10'];
  //     }
  //     return config.theme.padding['4'];
  //   })();
  //   return (
  //     parseFloat(padding) *
  //     2 *
  //     parseFloat(getComputedStyle(document.documentElement).fontSize)
  //   );
  // }, [breakpoint, typeof document]);
  // console.log(pageMargins);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (scrollContainer.current && childrenContainer.current) {
      const target = document.getElementById(`carousel-item-${index}`);
      if (target && !position) {
        const dimensions = target.getBoundingClientRect();
        setPosition(
          Math.floor(
            dimensions.left + dimensions.width / 2 - window.innerWidth / 2
          )
        );
      }
    }
  }, [typeof document, position]);

  // useEffect(() => {
  //   if (isHovering) {
  //     if (childrenContainer.current) {
  //       // setPosition(position +)
  //       // childrenContainer.current.style.setProperty(
  //       //   'transform',
  //       //   `translateX(100px)`
  //       // );
  //       // scrollContainer.current.scrollBy(500, 0);
  //       // console.log(scrollContainer.current.getBoundingClientRect().width);
  //       // scrollContainer.current.scroll(
  //       //   scrollContainer.current.getBoundingClientRect().width,
  //       //   0
  //       // );
  //     }
  //   }
  // }, [isHovering]);

  useEffect(() => {
    if (scrollContainer.current) {
      if (isHovering) {
        // setPosition(scrollContainer.current.getBoundingClientRect().width);
      } else {
        // console.log(
        //   'transform',
        //   scrollContainer.current.style.getPropertyValue(
        //     '-webkit-transform-x'
        //   ) ||
        //     scrollContainer.current.style.getPropertyValue(
        //       '-moz-transform-x'
        //     ) ||
        //     scrollContainer.current.style.getPropertyValue('-ms-transform-x') ||
        //     scrollContainer.current.style.getPropertyValue('-o-transform-x') ||
        //     scrollContainer.current.style.getPropertyValue('translate-x') ||
        //     scrollContainer.current.style.getPropertyValue('translate')
        // );
        // setPosition()
      }
    }
  }, [isHovering]);

  if (typeof document === 'undefined') return null;

  console.log('position', position);
  console.log('is hovering', isHovering);

  return (
    <div ref={scrollContainer} className={classes.container}>
      <div
        ref={childrenContainer}
        className={classes.subContainer}
        style={{
          // animationPlayState: isHovering ? 'running' : 'paused',
          // transition: `transform 10s linear`,
          transform: `translateX(-${position}px)`,
        }}
      >
        {children.map((_child, i) => {
          const distanceFromIndex = Math.abs(index - i);
          return (
            <div
              key={i}
              id={`carousel-item-${i}`}
              className={`relative h-screen-75 min-w-screen-50 md:min-w-screen-40 transition-all ${
                i === index ? 'shadow-lg' : ''
              }`}
              style={{
                zIndex: 999 - distanceFromIndex,
                transform: `scale(${1 - 0.25 * distanceFromIndex}) translateX(${
                  i > index ? -100 * distanceFromIndex : 100 * distanceFromIndex
                }px)`,
              }}
              onMouseOver={() => {
                if (i !== index) {
                  setIsHovering(true);
                } else {
                  setIsHovering(false);
                }
              }}
              onMouseOut={() => {
                setIsHovering(false);
              }}
            >
              {_child}
              {i !== index && (
                <div className="absolute z-50 top-0 left-0 bg-gray-50 opacity-40 h-full w-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCarousel;

// should infinitely scroll in a loop
// should horizontal scroll

// hijack scroll events when hover over items and horizontal scroll the containing div
