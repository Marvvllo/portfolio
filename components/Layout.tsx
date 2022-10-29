import { HTMLProps } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="px-8 sm:px-16">{children}</div>
    </>
  );
};

export default Layout;
