import Link, { LinkProps } from "next/link";
import React, { HTMLProps } from "react";

type Props = {
  arrow?: boolean;
};

export const PrimaryButton: React.FC<
  LinkProps & HTMLProps<HTMLAnchorElement> & Props
> = ({ children, href, className, arrow = false }) => {
  return (
    <Link
      href={href}
      className={`flex flex-row justify-start items-center gap-2
         bg-white rounded-md px-2 py-2
        font-medium text-black ring-2 ring-white group
        hover:bg-transparent hover:text-white transition-colors duration-300
        ${className}`}
      target="_blank"
    >
      <p>{children}</p>
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 aspect-square group-hover:translate-x-1 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      )}
    </Link>
  );
};

export const SecondaryButton: React.FC<
  LinkProps & HTMLProps<HTMLAnchorElement> & Props
> = ({ children, href, className, arrow = false }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex flex-row justify-start items-center 
          gap-2 ring-2 ring-white rounded-md px-2 py-2 
          font-medium text-white group
          hover:bg-white hover:text-black transition-colors duration-300
          ${className}`}
    >
      <p>{children}</p>
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 aspect-square group-hover:translate-x-1 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      )}
    </Link>
  );
};
