import Head from "next/head";
import Page from "../components/page";
import { useMemo, useState } from "react";
import useTimeout from "../hooks/useTimeout";
import { extractTailwindBreakpoint, rand } from "../res/utils";
import config from "../res/tailwind";
import useResizeListener from "../hooks/useResizeListener";

const textPool = {
  left: [
    {
      short: "Fn",
      long: "Functional",
    },
    {
      short: "Pr",
      long: "Practical",
    },
    {
      short: "Op",
      long: "Operative",
    },
  ],
  right: [
    {
      short: "In",
      long: "Innovative",
    },
    {
      short: "Cr",
      long: "Creative",
    },
    {
      short: "Vs",
      long: "Visionary",
    },
  ],
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useTimeout(() => setIsVisible(true), 500);
  const { width: windowWidth } = useResizeListener(100);
  console.log(windowWidth);

  const { left, right } = useMemo(() => {
    if (!windowWidth) return { left: [], right: [] };
    if (windowWidth <= extractTailwindBreakpoint(config.theme.screens["sm"])) {
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

  const max = left.length - 1;
  const [index, setIndex] = useState(rand(max));

  useTimeout(() => {
    setIndex((prevState) => {
      let newState = rand(max);
      while (newState === prevState) {
        newState = rand(max);
      }
      return newState;
    });
  }, 5000);

  console.log(index);

  return (
    <Page>
      <div className="h-screen flex flex-col">
        <div>
          <div>
            Michael Hodges
            <hr />
          </div>
          <p>Fullstack Web Developer</p>
        </div>
      </div>
    </Page>
  );
}
