import Link, { LinkProps } from "next/link";
import React, { Children, HTMLProps } from "react";
import { URL, Url, UrlObject } from "url";

type Props = {
  arrow?: boolean;
};

export const PrimaryButton: React.FC<
  LinkProps & HTMLProps<HTMLAnchorElement> & Props
> = ({ children, href, arrow = false }) => {
  return (
    <Link href={href} passHref>
      <a className="inline-flex flex-row justify-start items-center gap-2 bg-white rounded-md px-2 py-2 font-medium text-black">
        <p>{children}</p>
        {arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 aspect-square"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        )}
      </a>
    </Link>
  );
};

export const SecondaryButton = () => {
  return <div>buttons</div>;
};
