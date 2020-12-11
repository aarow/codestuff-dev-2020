import { useState, useRef } from "react";
import Link from "next/link";
import * as styles from "./menu.module.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log(menuRef);
    if (showMenu) {
      setShowMenu(false);
      slideUp();
    } else {
      setShowMenu(true);
      // document.addEventListener("click", handleOutsideClick);
    }
  };

  const handleOutsideClick = (e) => {
    // nevermind if I don't have a Menu reference and it's the same as target
    if (!menuRef && e.target === menuRef.current) return;

    document.removeEventListener("click", handleOutsideClick);
    slideUp();
  };

  const slideUp = () => {
    // nevermind if I don't have a Menu reference
    // if (menuRef === null) return;

    menuRef.current.classList.add(styles.menuHiding);
    setTimeout(() => {
      setShowMenu(false);
      menuRef.current.classList.remove(styles.menuHiding);
    }, 250);
  };

  return (
    <div className="text-right relative font-mono">
      <button
        onClick={toggleMenu}
        type="button"
        className={"bg-gray-800 px-5 py-2 relative z-10"}
      >
        menu
      </button>
      <div
        ref={menuRef}
        className={`bg-gray-800 absolute right-0 top-100 z-0 ${styles.menu} ${
          showMenu ? "" : "hidden"
        }`}
      >
        <nav>
          <li className="">
            <Link href="/resume">
              <a className="block px-5 py-2 hover:bg-white hover:text-black transition-all duration-150">
                Resume
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="block px-5 py-2 hover:bg-white hover:text-black transition-all duration-150">
                Articles
              </a>
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
