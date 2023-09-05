"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FC, useState } from "react";

type Items = {
  path: string;
  name: string;
}[];

const navItems: Items = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];

const Nav: FC = () => {
  let pathname = usePathname();
  if (pathname.includes("/writing/")) pathname = "/writing";
  else if (pathname === "/404" || pathname === "/_not-found") pathname = "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="flex justify-center sticky top-8 z-[100] mb-4 md:mb-10">
      <div className="border border-stone-800/90 p-[0.4rem] rounded-full mb-12 bg-stone-900/80 backdrop-blur-md w-72">
        <nav className="flex gap-2 relative justify-center z-[100]  rounded-lg ">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;
            return (
              <Link
                key={item.path}
                className={`px-4 py-1.5 rounded-full text-xs lg:text-sm relative no-underline duration-300 ease-in text-zinc-100 hover:text-zinc-400`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span className={``}>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-stone-700 rounded-full -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 12,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
