import React from 'react';

export default function Header() {
  return (
    <header
      className="h-full py-3 absolute z-50 flex justify-center"
      style={{ width: 75 }}
    >
      <div>
        <button>
          <img src="logo.png" height="auto" width={50} />
        </button>
      </div>
    </header>
  );
}
