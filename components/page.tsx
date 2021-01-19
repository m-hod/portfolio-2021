import React from "react";
import Header from "./header";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-300 flex relative">
      <Header />
      <main className="min-h-screen w-full px-20">{children}</main>
    </div>
  );
}

export default Page;
