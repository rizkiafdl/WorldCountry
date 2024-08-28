import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdGlobe } from "react-icons/io";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();

    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a
                    onClick={() => navigate("/")}
                    className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        World Country
                    </span>
                    <IoMdGlobe size={32} />
                </a>

                {/* Hamburger menu for small screens */}
                <button
                    onClick={toggleMenu}
                    className="text-gray-500 dark:text-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Main navigation */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } w-full md:flex md:w-auto md:items-center`}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                onClick={() => navigate("/")}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <button
                                id="mega-menu-full-dropdown-button"
                                data-collapse-toggle="mega-menu-full-dropdown"
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={toggleDropdown}
                            >
                                Country Data
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/about")}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Dropdown for Country Data */}
            {isDropdownOpen && (
                <div
                    id="mega-menu-full-dropdown"
                    className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
                >
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a
                                    onClick={() => navigate("/country")}
                                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                >
                                    <div className="font-semibold">Country Search</div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        This page is the starting point for users when they access
                                        the website. Here, users can see a brief description of
                                        World Country and the features offered.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => navigate("/country")}
                                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                >
                                    <div className="font-semibold">Country Filter</div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        This page provides filtering options for countries based on
                                        criteria like continent, language, or independence status.
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
