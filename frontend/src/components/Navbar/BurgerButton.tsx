"use client";
import React, { useRef, useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "@/lib/types";
import { NavMenu } from "./NavMenu";
import useClickOutside from "@/lib/hooks/useClickOustide";

export function BurgerButton(props: { menu: Menu }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setShowMenu(false));
  const genericHamburgerLine = `h-[2.5px] w-6 my-[2px] rounded-full transition ease transform duration-300 bg-primary-main group-hover:bg-primary-white`;

  useEffect(() => {
    // console.log(props.menu);

    // setMenu(props.menu);
  }, []);

  return (
    <div ref={menuRef}>
      {/* <div
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 text-emerald-700 cursor-pointer p-2 hover:bg-emerald-700 hover:text-white border border-emerald-700 rounded duration-150"
      >
        {showMenu ? (
          <XMarkIcon className="w-7" />
        ) : (
          <Bars3Icon className="w-7" />
        )}
        <p className="text-lg font-medium">Каталог</p>
      </div> */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-1 px-2 text-primary-main border border-primary-main rounded group hover:bg-primary-main hover:text-primary-white duration-300"
      >
        <div className="flex flex-col h-10 w-10 justify-center items-center">
          <div
            className={`${genericHamburgerLine} ${
              showMenu ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${showMenu ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMenu ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </div>
        <p className="text-lg font-medium">Каталог</p>
      </button>
      <NavMenu menu={props.menu} showMenu={showMenu} />
      {/* <Menu data={props.menu} /> */}
    </div>
  );
}

export default BurgerButton;
