import Page from 'components/page';
import { useEffect, useMemo, useState } from 'react';
import useTimeout from 'hooks/useTimeout';
import { extractTailwindBreakpoint, rand } from 'res/utils';
import config from 'res/tailwind';
import useResizeListener from 'hooks/useResizeListener';
import { textPool } from 'res/data';
import { ChevronDown } from 'react-feather';
import IconButton from 'components/IconButton';
import { CSSTransition } from 'react-transition-group';

export default function Home() {
  const [titleVisibility, setTitleVisibility] = useState(false);

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

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIndex((prevState) => {
  //           let newState = rand(max);
  //           while (newState === prevState) {
  //             newState = rand(max);
  //           }
  //           return newState;
  //         })
  //   })
  // })

  // useTimeout(() => {
  //   setIndex((prevState) => {
  //     let newState = rand(0, max);
  //     newState = 2;
  //     console.log(newState);

  //     // do {
  //     //   newState = rand(0, max);
  //     //   console.log(newState);
  //     // } while (newState === prevState);
  //     return newState;
  //   });
  // }, 500);

  return (
    <Page>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex justify-between my-10">
          <div className="w-full">
            <CSSTransition
              in={!titleVisibility}
              timeout={500}
              classNames="transitions"
              unmountOnExit
            >
              <h1 className="text-right text-5xl lg:text-7xl font-black">
                {left[index]}
              </h1>
            </CSSTransition>
          </div>
          <div className="flex justify-center mx-8">
            <h1 className="text-8xl"> | </h1>
          </div>
          <div className="w-full flex align-bottom">
            <CSSTransition
              in={!titleVisibility}
              timeout={500}
              classNames="transitions"
              unmountOnExit
            >
              <h1 className="text-left text-5xl lg:text-7xl font-black">
                {right[index]}
              </h1>
            </CSSTransition>
          </div>
        </div>
        <div className="flex flex-col align-center">
          <h3 className="text-center font-serif text-2xl md:text-3xl border-b-2 border-black pb-1 mb-2">
            Michael Hodges
          </h3>
          <h5 className="text-center font-serif text-base md:text-lg">
            Fullstack Web Developer
          </h5>
        </div>
        <div className="flex justify-center align-bottom">
          <button
            onClick={() => {
              //scroll to
            }}
            className="text-lg font-serif underline hover:text-gray-700"
          >
            <IconButton>
              <ChevronDown size={32} />
            </IconButton>
          </button>
        </div>
      </div>
    </Page>
  );
}
