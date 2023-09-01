import type { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
