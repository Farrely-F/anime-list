"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: React.SyntheticEvent) => {
    event?.preventDefault();

    const query = searchRef.current?.value;
    router.push(`/search/${query}`);
  };

  return (
    <>
      <form className="relative" onSubmit={handleSearch}>
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search for...{" "}
        </label>

        <input
          ref={searchRef}
          type="text"
          id="Search"
          placeholder="Search for Anime ..."
          className="border p-2 w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm dark:border-gray-100/10 dark:bg-gray-800 dark:text-white sm:text-sm"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button
            onClick={handleSearch}
            type="submit"
            className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </form>
    </>
  );
}
