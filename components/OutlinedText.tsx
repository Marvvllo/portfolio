import { HTMLProps } from "react";

// Whatever goes in between the texts has to have z-10

type Props = {
  shiftUp?: boolean;
};

const OutlinedText: React.FC<HTMLProps<HTMLDivElement> & Props> = ({
  className,
  children,
  shiftUp,
}) => {
  return (
    <div className={`${className} relative `}>
      <h2 className="heading md:text-8xl z-0">{children}</h2>
      <h2 className="z-20 absolute top-0 left-0 right-0 heading md:text-8xl text-transparent text-outlined">
        {children}
      </h2>
    </div>
  );
};

export default OutlinedText;
