import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { GoSignOut } from "react-icons/go";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Portfolio", href: "/?cat=technology", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const lo = () => {
    logout();
    navigate("/");
  };
  return (
    // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    //   <div className="container flex flex-wrap items-center justify-between mx-auto">
    //     <Link to="/" className="flex items-center">
    //       <img
    //         src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
    //         className="h-6 mr-3 sm:h-9"
    //         alt="Flowbite Logo"
    //       />
    //       <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //         News Today
    //       </span>
    //     </Link>
    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clipRule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <Link
    //             to="/"
    //             aria-current="page"
    //             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //     <li>
    //           <Link
    //             to="/?cat=art"
    //             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Art
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/?cat=technology"
    //             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Technology
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/?cat=cinema"
    //             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Cinema
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/?cat=design"
    //             className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Design
    //           </Link>
    //         </li>

    //         <li>
    //           <Link
    //             to="/profile"
    //             className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
    //           >
    //             {currentUser?.username}
    //           </Link>
    //         </li>

            // {currentUser ? (
            //   <div>
            //     <li className="float-left">
            //       <button
            //         onClick={lo}
            //         className="block pl-3 text-lg text-white bg-white rounded md:bg-blue-500 md:p-2 md:text-white md:p-0 dark:text-white"
            //       >
            //         <GoSignOut />
            //       </button>
            //     </li>
            //     <li className="float-left ml-3">
            //       <Link
            //         to="/write"
            //         className="block pl-3 text-white bg-white rounded md:bg-blue-500 md:p-2 md:text-white md:p-0 dark:text-white"
            //       >
            //         Write
            //       </Link>
            //     </li>
            //   </div>
            // ) : (
            //   <li className="float-left">
            //     <Link
            //       to="/login"
            //       className="block pl-3 text-white bg-white rounded md:bg-blue-500 md:p-2 md:text-white md:p-0 dark:text-white"
            //     >
            //       Login
            //     </Link>
            //   </li>
            // )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Disclosure as="nav" className="bg-blue-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white">
                          Blog
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Account settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Support
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  License
                                </a>
                              )}
                            </Menu.Item>
                            <form onSubmit={lo}>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              {currentUser ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                
              </div> 
              ) : (
                <button className="float-left">
               <Link
                  to="/login"
                  className="block pl-3 text-white bg-white rounded md:bg-blue-500 md:p-2 md:text-white md:p-0 dark:text-white"
                >
                  Login
                </Link>
              </button>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
