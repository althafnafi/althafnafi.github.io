import React from "react";

const NavbarHome = () => {
    return (
        <nav className=" px-2 py-4 rounded-none font-mono">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="group self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">
                        <span className="text-teal-400 group-hover:underline">althaf</span>
                        .nafi()
                    </span>
                </a>
                <button className="block lg:hidden">
                    <svg className="w-8 h-8" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    {/* <svg viewBox="0 0 80 80" width="40" height="40" fill="white">
                        <rect width="80" height="12"></rect>
                        <rect y="25" width="80" height="12"></rect>
                        <rect y="50" width="80" height="12"></rect>
                    </svg> */}
                </button>
                <div className="hidden lg:block font-bold">
                    <ul className="flex flex-row gap-3 md:gap-6 text-white">
                        <li>
                            <a href="#about" className="hover:text-teal-300">
                                .about()
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-teal-300">
                                .contact()
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-teal-300">
                                .portofolio()
                            </a>
                        </li>
                    </ul>
                </div>


                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-300" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-dark_gray-900 md:dark:bg-dark_gray-900 dark:border-gray-700">
                        <li>
                            <a href="#about" className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                .about()
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                .contact()
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/althafnafi" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                .portofolio()
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav >
    );

};

export default NavbarHome;