import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

import { useRouter } from "next/router";

import Link from "next/link";

import Logo from "-!svg-react-loader!public/images/logo.svg";
import DefaultAvatar from "-!svg-react-loader!public/images/default-avatar.svg";

export default function Header({ onLight }) {
  const [User, setUser] = useState(() => null);

  const [ToggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const userCookies =
      decodeURIComponent(window.document.cookie)
        ?.split(";")
        ?.find?.((item) => item.indexOf("BWAMICRO:user") > -1)
        ?.split("=")[1] ?? null;
    setUser(userCookies ? JSON.parse(userCookies) : null);
  }, []);

  const linkColor = onLight ? "text-gray-900" : "text-white";

  const router = useRouter();

  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header
      className={[
        "flex justify-between items-center",
        ToggleMenu ? "fixed w-full -mx-4 px-4" : "",
      ].join(" ")}
    >
      <div style={{ height: 54, zIndex: 50 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <div className="flex md:hidden">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}
        ></button>
      </div>
      <ul
        className={[
          "transition-all duration-200 items-center fixed inset-0 bg-indigo-1000 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible",
          ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
        ].join(" ")}
      >
        <li className="my-4 md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="my-4 md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Pricing
            </a>
          </Link>
        </li>
        <li className="my-4 md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Features
            </a>
          </Link>
        </li>
        <li className="my-4 md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Story
            </a>
          </Link>
        </li>
        <li className="mt-8 md:mt-0">
          {User ? (
            <a
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center"
            >
              <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                {User?.thumbnail ? (
                  <img
                    src={User?.thumbnail}
                    alt={User?.name ?? "Username"}
                    className="object-cover w-8 h-8 inline-block"
                  />
                ) : (
                  <DefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block"></DefaultAvatar>
                )}
              </span>
              Hi, {User.name}
            </a>
          ) : (
            <a
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
            >
              {textCTA}
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};
