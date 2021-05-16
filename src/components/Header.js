import React, { Fragment, useEffect, useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { UserContext } from '../App';

export default function Header() {
    const history = useHistory();

    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    useEffect(() => {
        
    }, [user])

    const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    function handleLogin() {
        window.open('https://discord.com/api/oauth2/authorize?client_id=833070237247209499&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin_redirect&response_type=token&scope=identify%20email%20guilds', '_blank', 'width=520,height=820');
    }

    function signOut() {
        setUser(null);

        removeCookie('userToken');
        history.push('/');
    }

    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item, itemIdx) =>
                                            itemIdx === 0 ? (
                                                <Fragment key={item}>
                                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                    <button
                                                        className="bg-gray-900 text-primary px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        {item}
                                                    </button>
                                                </Fragment>
                                            ) : (
                                                <a
                                                    key={item}
                                                    href="/"
                                                    className="text-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    {item}
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        className={`text-primary w-24 text-xs font-semibold rounded focus:outline-none p-2 mr-4 ${user ? 'hidden' : ''}`}
                                        style={{ backgroundColor: '#7289DA' }}
                                        type='submit'
                                        onClick={handleLogin}
                                    >Login Here</button>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        {({ open }) => (
                                            <>
                                                <div className='flex flex-row'>
                                                    <p className={`text-primary px-3 py-2 rounded-md font-medium ${user ? '' : 'hidden'}`}>{user && user.username}</p>
                                                    <Menu.Button className={`max-w-xs bg-gray-800 rounded-full flex items-center text-sm outline-none focus:outline-none ${user ? '' : 'hidden'}`}>
                                                        <span className="sr-only">Open user menu</span>
                                                        {
                                                            user && user.id &&
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                                                                alt=""
                                                            />
                                                        }
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        static
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                                    >
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={signOut}
                                                                    className={classNames(
                                                                        active ? "bg-gray-100" : "",
                                                                        "block w-full h-full px-4 py-2 text-sm text-gray-700 focus:outline-none"
                                                                    )}
                                                                >
                                                                    Sign Out
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item, itemIdx) =>
                                itemIdx === 0 ? (
                                    <Fragment key={item}>
                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                        <a
                                            href="/"
                                            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {item}
                                        </a>
                                    </Fragment>
                                ) : (
                                    <a
                                        key={item}
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            {
                                user &&
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className={`text-base font-medium leading-none text-white  `}>
                                            {user && user.username}
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                user ?
                                    <div className="mt-3 px-2 space-y-1">
                                        <button
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            onClick={signOut}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                    :
                                    <div className="mt-3 px-2 space-y-1">
                                        <button
                                            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            onClick={handleLogin}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}