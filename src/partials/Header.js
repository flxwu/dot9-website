import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Logo from "./Logo";

function Header() {
    const [top, setTop] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const { t } = useTranslation();

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    const navigationLinks = (
        <>
            <Link
                to="/"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
                {t("nav-home")}
            </Link>
            <Link
                to="/about"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
                {t("nav-about")}
            </Link>
            <Link
                to="/careers"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
                Careers
            </Link>
            <Link
                to="/pitch"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
                Pitch Deck
            </Link>
        </>
    );

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 sm:transition sm:duration-300 sm:ease-in-out ${
                (!top || navOpen) && "bg-white blur shadow-lg"
            }`}
        >
            <nav>
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div class="flex flex-grow items-center justify-between">
                            {/* Site branding */}
                            <div className="flex-shrink-0 mr-4">
                                <Logo width="120" height="70" />
                            </div>

                            {/* Site navigation */}
                            <div className="hidden sm:flex sm:ml-6 justify-end flex-grow flex-wrap items-center">
                                <div className="flex space-x-4">
                                    {navigationLinks}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex sm:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setNavOpen(!navOpen)}
                            >
                                {/* accessability */}
                                <span class="sr-only">Open main menu</span>

                                {/* show icons when menu is open/closed */}
                                <HiOutlineMenu
                                    fill="none"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className={`${
                                        !navOpen ? "block" : "hidden"
                                    } h-6 w-6`}
                                />
                                <HiOutlineX
                                    className={`${
                                        navOpen ? "block" : "hidden"
                                    } h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div class="sm:hidden" id="mobile-menu">
                    <div
                        className={`px-2 pt-2 pb-3 space-y-1 transition duration-300 ease-in-out ${
                            !navOpen ? "hidden" : ""
                        }`}
                    >
                        {navigationLinks}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
