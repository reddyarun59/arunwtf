import type { FC, ReactNode } from "react";

export const Root: FC<{ children: ReactNode }> = ({ children }) => (
  <main className="max-w-2xl mx-auto px-8">{children}</main>
);

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="">{children}</div>;
};
