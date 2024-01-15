"use client";

/**
 * 이 파일은 React와 TypeScript를 사용하여 웹사이트의 네비게이션 바를 구현합니다.
 * 네비게이션 바는 홈, 여행, 속담 등의 항목을 포함하며, 각 항목을 클릭하면 해당 페이지로 이동합니다.
 * 현재 페이지에 해당하는 항목은 다른 색상으로 표시됩니다.
 *
 * `Navbar` 함수는 네비게이션 바를 렌더링합니다.
 * `NavItem` 함수는 각 네비게이션 항목을 렌더링합니다. 현재 페이지에 해당하는 항목에는 밑줄이 추가됩니다.
 */

import { motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { HomeIcon, icons } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: Record<string, { name?: string; icon?: keyof typeof icons }> = {
  "/": {
    icon: "Home",
  },
  // "/journey": {
  //   name: "Journey",
  // },
  "/proverb": {
    name: "일본속담",
    icon: "BookMarked",
  },
  // "/dictionary": {
  //   name: "Dictionary",
  // },
  "/guide": {
    name: "일본가이드",
    icon: "Compass",
  },
};

const wideScreenPaths = ["/guide/public-holidays", "/guide/calendar"];

export function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/proverb/")) {
    pathname = "/proverb";
  }

  const maxWidth = wideScreenPaths.includes(pathname)
    ? "max-w-[1000px]"
    : "max-w-xl";

  return (
    <aside
      className={cn(
        "max-w-xl w-full mx-auto flex justify-start mb-0 tracking-tight sticky top-0 bg-white dark:bg-[#111010] z-10 py-2 font-skybori",
        maxWidth
      )}>
      <div>
        <LayoutGroup>
          <nav
            className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav">
            <div className="flex flex-row space-x-0">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name, icon }]) => {
                  return (
                    <NavItem key={path} path={path} name={name} icon={icon} />
                  );
                })}
              </Suspense>
            </div>
            {/* <div className="flex flex-row space-x-0">
              <NavItem path="/auth/signup" name="Signup" />
              <NavItem path="/auth/login" name="Login" />
            </div> */}
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

let cx = (...classes) => classes.filter(Boolean).join(" ");

function NavItem({
  path,
  name,
  icon,
}: {
  path: string;
  name?: string;
  icon?: keyof typeof icons;
}) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/proverb/")) {
    pathname = "/proverb";
  }
  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cx(
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle gap-2",
        isActive ? "dark:text-neutral-200" : "text-neutral-500"
      )}>
      <span className="relative py-1 pr-3 text-lg flex items-center">
        {icon && <Icon2 className="mr-2 top-[2px] relative" name={icon} />}
        {name}
        {path === pathname ? (
          <motion.div
            className={
              "mt-1 absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-600 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            }
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

const Icon2 = ({
  name,
  className,
}: {
  name: keyof typeof icons;
  className: string;
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={className} size={16} />;
};
