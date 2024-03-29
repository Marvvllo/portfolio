import { HTMLProps } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="px-8 sm:px-12 overflow-hidden text-white h-full">
        {children}
      </div>
    </>
  );
};

export default Layout;
