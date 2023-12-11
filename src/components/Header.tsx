"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Search from "./Search";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, [pathname]);

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      setIsOpen(true);
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <>
      <header className="fixed top-0 z-10 bg-white dark:bg-black/70 backdrop-blur-sm p-4 w-full border-b dark:border-white/10">
        <nav className="flex items-center justify-between px-4 md:px-16">
          <button onClick={handleOpen} className="lg:hidden">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 7l10 10M7 17L17 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
                />
              </svg>
            )}
          </button>
          <div className="flex items-center gap-16">
            <Link className="font-bold text-2xl" href="/">
              A<span className="font-thin">x</span>Space
            </Link>
            <div className="hidden lg:flex gap-4">
              <Link href="/about">About</Link>
            </div>
          </div>
          <div className="lg:flex items-center gap-4 hidden">
            <Search />
            <ThemeSwitcher />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full h-[100vh] fixed top-16 left-0 z-[1] bg-gray-600/50 dark:bg-black/90 backdrop-blur-sm`}
      >
        <div className="p-8 flex flex-col gap-4">
          <Search />
          <p className="text-white">Toggle Theme:</p>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
