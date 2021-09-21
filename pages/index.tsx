import { extractTailwindBreakpoint, rand } from 'res/utils';
import { projects, textPool } from 'res/data';
import { useEffect, useMemo, useRef, useState } from 'react';

import AnimationContainer from 'components/AnimationContainer';
import { CSSTransition } from 'react-transition-group';
import { ChevronDown } from 'react-feather';
import IconButton from 'components/IconButton';
import Page from 'components/page';
import ProjectCard from 'components/ProjectCard';
import classes from './index.module.scss';
import clsx from 'clsx';
import config from 'res/tailwind';
import useResizeListener from 'hooks/useResizeListener';

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
              <h1 className="text-right font-black">{left[index]}</h1>
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
              <h1 className="text-left font-black">{right[index]}</h1>
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
            <h3 className="text-center border-b-2 border-black pb-1 mb-2">
              Michael Hodges
            </h3>
            <h5 className="text-center">Fullstack Web Developer</h5>
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
          <img src="logo_grayscale.png" style={{ maxHeight: '75%' }} />
        </div>
      </div>
      <div className="min-h-screen sm:h-screen" ref={scrollRef}>
        <div className="py-12 h-full flex justify-center">
          <div className="max-w-6xl h-full w-full flex flex-col justify-between">
            <div className="mb-8">
              <div className="w-min">
                <h2>About</h2>
                <AnimationContainer type="scroll">
                  <hr />
                </AnimationContainer>
              </div>
              <div className="my-4 w-full sm:w-9/12">
                <AnimationContainer>
                  <p>
                    I am a full-stack developer with a special interest in
                    decentralization, particularly to do with large-scale
                    content distribution networks and the problems that come
                    with the costly storage solutions these platforms rely upon.
                    I am currently building upon my skills on both the front and
                    back-end so that I can further explore this area in the
                    hopes of contributing to or creating new open source
                    solutions to the issue that also, importantly, provides a
                    clean and easy to operate user experience to provide maximum
                    accessibility to the average user.
                  </p>
                </AnimationContainer>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img
                src="images/images_clip-art_Angelo_Gemmi_Angelo_Gemmi_geometric_motif.png"
                alt="about"
                className="w-1/2 sm:w-1/3 md:w-1/4 animate-spin-slow opacity-25"
              />
            </div>
            <div className="mt-8 flex flex-col items-end text-right">
              <div className="w-min">
                <h2>Skills</h2>
                <AnimationContainer type="scroll">
                  <hr />
                </AnimationContainer>
              </div>
              <div className="my-4 w-full sm:w-9/12">
                <AnimationContainer>
                  <p>
                    I am a full-stack web developer and am thus confident in my
                    skills with technologies involved in both front-end and
                    back-end, with my main areas of expertise currently being
                    React and Node.js. I am also in the process of upskilling my
                    knowledge of back-end technologies by learning C# and the
                    .NET framework, and exploring further implementations of
                    JavaScript like TypeScript.
                  </p>
                </AnimationContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="w-min">
            <h2>Projects</h2>
            <AnimationContainer type="scroll">
              <hr />
            </AnimationContainer>
          </div>
          <div className="mt-8 flex flex-col">
            {projects.map((_project, i) => (
              <ProjectCard key={i} project={_project} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
