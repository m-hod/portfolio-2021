import React, { useState } from 'react';

import useDisableScroll from 'hooks/useDisableScroll';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  useDisableScroll(isExpanded);

  return (
    <>
      <header
        className="py-3 fixed z-50 flex justify-center"
        style={{ width: 75 }}
      >
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <img
              src="logo.png"
              height="auto"
              width={50}
              className={`${
                isExpanded ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              } transition-all`}
            />
          </button>
        </div>
      </header>
      <div
        className={`${
          isExpanded ? 'flex' : 'hidden'
        } bg-white absolute h-full w-full z-40 justify-center items-center`}
      ></div>
    </>
  );
}
