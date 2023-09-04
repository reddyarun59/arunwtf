import type { FC, ReactNode } from "react";

export const Root: FC<{ children: ReactNode }> = ({ children }) => (
  <main>{children}</main>
);

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="">{children}</div>;
};
