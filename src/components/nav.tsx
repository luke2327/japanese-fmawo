"use client";

import { motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/journey": {
    name: "Journey",
  },
  "/proverb": {
    name: "Proverb",
  },
  // "/dictionary": {
  //   name: "Dictionary",
  // },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-0 tracking-tight sticky top-0 bg-white dark:bg-[#111010] z-10 py-2">
      <div>
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav">
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

let cx = (...classes) => classes.filter(Boolean).join(" ");

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/proverb/")) {
    pathname = "/proverb";
  }
  let isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cx(
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
        {
          "text-neutral-500": !isActive,
        }
      )}>
      <span className="relative py-1 px-2 text-lg">
        {name}
        {path === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}