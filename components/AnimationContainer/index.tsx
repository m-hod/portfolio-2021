import React, { useEffect, useMemo, useRef, useState } from 'react';

import classes from './index.module.scss';
import clsx from 'clsx';

const AnimationContainer = ({
  children,
  type = 'fade',
}: {
  children: React.ReactNode;
  type?: 'fade' | 'scroll';
}) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={
        type === 'scroll'
          ? clsx(classes.scrollIn, isVisible && classes.scrollInVisible)
          : clsx(classes.fadeIn, isVisible && classes.fadeInVisible)
      }
    >
      {children}
    </div>
  );
};

export default AnimationContainer;
