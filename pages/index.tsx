import Page from 'components/page';
import { useEffect, useMemo, useRef, useState } from 'react';
import { extractTailwindBreakpoint, rand } from 'res/utils';
import config from 'res/tailwind';
import useResizeListener from 'hooks/useResizeListener';
import { projects, textPool } from 'res/data';
import { ChevronDown } from 'react-feather';
import IconButton from 'components/IconButton';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import Card from 'components/Card';
import classes from './index.module.scss';

const titleInterval = 7500;
const titleTimeout = titleInterval - 1000;

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [titleVisibility, setTitleVisibility] = useState(false);
  const [dividerVisibility, setDividerVisiblity] = useState(false);
  const [subtitleVisibility, setSubtitleVisibility] = useState(false);
  const [backgroundVisibility, setBackgroundVisibility] = useState(false);

  const { width: windowWidth } = useResizeListener(50);

  const { left, right } = useMemo(() => {
    if (!windowWidth) return { left: [], right: [] };
    if (windowWidth <= extractTailwindBreakpoint(config.theme.screens['sm'])) {
      return {
        left: textPool.left.map((_left) => _left.short),
        right: textPool.right.map((_right) => _right.short),
      };
    }
    return {
      left: textPool.left.map((_left) => _left.long),
      right: textPool.right.map((_right) => _right.long),
    };
  }, [config.theme.screens, windowWidth]);

  const max = left.length > 0 ? left.length : 0;
  const [index, setIndex] = useState(rand(0, max));

  useEffect(() => {
    if (windowWidth) {
      setDividerVisiblity(true);
      setTimeout(() => {
        setSubtitleVisibility(true);
      }, 1000);
      setTimeout(() => {
        setBackgroundVisibility(true);
      }, 2250);
    }
  }, [windowWidth]);

  useEffect(() => {
    setTitleVisibility(true);
  }, []);

  useEffect(() => {
    if (max > 0) {
      const interval = setInterval(() => {
        if (max > 0) {
          setIndex((prevIndex) => {
            let newIndex = rand(0, max);
            do {
              newIndex = rand(0, max);
            } while (newIndex === prevIndex);
            return newIndex;
          });
          setTitleVisibility(true);
        }
      }, titleInterval);
      return () => {
        clearInterval(interval);
      };
    }
  }, [max]);

  useEffect(() => {
    if (titleVisibility) {
      const timeout = setTimeout(() => {
        setTitleVisibility(false);
      }, titleTimeout);
      return () => {
        clearInterval(timeout);
      };
    }
  }, [titleVisibility]);

  return (
    <Page>
      <div className="h-screen flex flex-col justify-center items-center relative">
        <div className="h-1/3" />
        <div className="h-1/3 w-full flex justify-center relative">
          <div className="absolute right-2/4 top-8 mr-8 md:mr-20">
            <CSSTransition
              in={titleVisibility}
              timeout={500}
              classNames="title-transition"
              unmountOnExit
            >
              <h1 className="text-right text-5xl lg:text-7xl font-black">
                {left[index]}
              </h1>
            </CSSTransition>
          </div>
          <div
            className={clsx(
              'flex justify-center mx-8 fade-in',
              dividerVisibility && 'fade-in--visible'
            )}
          >
            <h1 className="text-8xl">|</h1>
          </div>
          <div className="absolute left-2/4 top-8 ml-8 md:ml-20">
            <CSSTransition
              in={titleVisibility}
              timeout={500}
              classNames="title-transition"
              unmountOnExit
            >
              <h1 className="text-left text-5xl lg:text-7xl font-black">
                {right[index]}
              </h1>
            </CSSTransition>
          </div>
        </div>
        <div className="h-1/3 flex flex-col justify-between">
          <div
            className={clsx(
              'h-3/6 flex flex-col align-center fade-and-slide-in',
              subtitleVisibility && 'fade-and-slide-in--visible'
            )}
          >
            <h3 className="text-center font-serif text-2xl md:text-3xl border-b-2 border-black pb-1 mb-2">
              Michael Hodges
            </h3>
            <h5 className="text-center font-serif text-base md:text-lg">
              Fullstack Web Developer
            </h5>
          </div>
          <div className="h-3/6 flex justify-center items-center align-center">
            <div>
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="text-lg font-serif underline hover:text-gray-700"
              >
                <IconButton>
                  <ChevronDown size={32} />
                </IconButton>
              </button>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'absolute w-full h-full top-0 left-0 flex justify-center items-center opacity-25 p-5',
            classes.backgroundFadeIn,
            backgroundVisibility && classes.backgroundFadeInVisible
          )}
          style={{ zIndex: -1 }}
        >
          <img src="logo.png" style={{ maxHeight: '75%' }} />
        </div>
      </div>
      <div
        className="h-screen flex justify-center items-center flex-wrap"
        ref={scrollRef}
      >
        {projects.map((_project) => (
          <Card key={_project.id} {..._project} />
        ))}
      </div>
    </Page>
  );
}
