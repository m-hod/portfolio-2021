import React from 'react';
import classes from './index.module.scss';

export default function IconButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={classes.border}>{children}</div>;
}
