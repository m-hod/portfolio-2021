import React from 'react';

function Tab({ text }: { text: string }) {
  return (
    <span className="m-1 py-1 px-2 border-2 border-gray-500 bg-gray-300 rounded text-gray-500 text-sm">
      {text}
    </span>
  );
}

export default Tab;
