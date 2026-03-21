import { Navbar } from "@/components/Navbar";
import React from "react";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
