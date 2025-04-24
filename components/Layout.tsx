import { HTMLProps } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<HTMLProps<HTMLDivElement>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen flex-col justify-center overflow-hidden px-8 text-white sm:px-12 md:flex">
        {children}
      </div>
    </>
  );
};

export default Layout;
