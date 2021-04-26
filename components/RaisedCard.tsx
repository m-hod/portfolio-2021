import React from 'react';

function RaisedCard({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-full shadow-lg p-8 bg-white">{children}</div>;
}

export default RaisedCard;
