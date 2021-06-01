import { UserContext } from '../App';
import { useCookies } from 'react-cookie';
import { useHistory, NavLink, Link } from 'react-router-dom';
import React, { Fragment, useContext } from "react";
import { GetHeaderScripts } from '../locales/Scripts';
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";

export default function Header() {
    const history = useHistory();

    const { user, setUser } = useContext(UserContext);
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    window.addEventListener('message', (event) => {
        if (event.origin === process.env.REACT_APP_SERVER_URL) {
            if (event.data === 'login-success') {
                window.location.href.includes('event') ? window.location.reload() : window.location.href = process.env.REACT_APP_WEB_URL + '/dashboard';
            }
        }
    })

    function handleLogin() {
        const uri = encodeURIComponent(process.env.REACT_APP_WEB_URL + '/login_redirect');
        window.open(`https://discord.com/api/oauth2/authorize?client_id=833070237247209499&redirect_uri=${uri}&response_type=code&scope=identify%20email%20guilds`, '_blank', 'width=520,height=820');
    }

    function signOut() {
        setUser(null);
        removeCookie('userToken', { path: '/' });
        const origin = window.location.origin;
        if (origin.includes('event')) {
            //do nothing
        }
        else if (origin !== '/') {
            history.push('/');
        }
    }

    return (
        <Disclosure as="nav" className="bg-transparent bg-home bg-opacity-50 border-b border-gray-800 border-opacity-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Link to='/'>
                                        <img
                                            className="h-8 w-8 cursor-pointer focus:outline-none"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <NavLink
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            to='/integrations'
                                            activeClassName='bg-gray-700'
                                        >
                                            {GetHeaderScripts('integrations')}
                                        </NavLink>
                                        <NavLink
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            to='/features'
                                            activeClassName='bg-gray-700'
                                        >
                                            {GetHeaderScripts('features')}
                                        </NavLink>
                                        <NavLink
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            to='/documentation'
                                            activeClassName='bg-gray-700'
                                        >
                                            {GetHeaderScripts('documentation')}
                                        </NavLink>
                                        <NavLink
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            to='/commands'
                                            activeClassName='bg-gray-700'
                                        >
                                            {GetHeaderScripts('commands')}
                                        </NavLink>
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
                                    >
                                        {GetHeaderScripts('login_button')}
                                    </button>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        {({ open }) => (
                                            <>
                                                <div className='flex flex-row'>
                                                    <p className={`text-primary px-3 py-2 rounded-md font-medium ${user ? '' : 'hidden'}`}>{user && user.username}</p>
                                                    <Menu.Button className={`max-w-xs flex items-center text-sm outline-none focus:outline-none ${user ? '' : 'hidden'}`}>
                                                        <span className="sr-only">Open user menu</span>
                                                        {
                                                            user && user.id &&
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                                                                alt="user_avatar"
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
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg p-1 bg-title ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                                    >
                                                        <Menu.Item>
                                                            <button
                                                                onClick={() => {
                                                                    user ?
                                                                        history.push('/dashboard')
                                                                        :
                                                                        handleLogin();
                                                                }}
                                                                className="w-full block rounded p-2 text-sm text-primary text-left hover:bg-content focus:outline-none"
                                                            >
                                                                Dashboard
                                                            </button>
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            <button
                                                                onClick={() => {
                                                                    user ?
                                                                        history.push(`/user_settings`)
                                                                        :
                                                                        handleLogin();
                                                                }}
                                                                className="w-full block rounded p-2 text-sm text-primary text-left hover:bg-content focus:outline-none"
                                                            >
                                                                User Settings
                                                            </button>
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            <button
                                                                onClick={signOut}
                                                                className="w-full block rounded p-2 text-sm text-red-500 text-left hover:bg-red-500 hover:text-primary focus:outline-none"
                                                            >
                                                                Sign Out
                                                            </button>
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
                            <button
                                onClick={() => {
                                    user ?
                                        history.push('/dashboard')
                                        :
                                        handleLogin();
                                }}
                                className="block rounded w-full h-full p-2 text-sm text-primary text-left hover:bg-content focus:outline-none"
                            >
                                Dashboard
                            </button>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button
                                onClick={() => {
                                    user ?
                                        history.push(`/user_settings`)
                                        :
                                        handleLogin();
                                }}
                                className="w-full block rounded p-2 text-sm text-primary text-left hover:bg-content focus:outline-none"
                            >
                                User Settings
                            </button>
                        </div>
                        <div className="px-2 py-2 border-t border-gray-700 flex">
                            {
                                user !== null &&
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                                            alt="user_avatar"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className={`text-base font-medium leading-none text-white  `}>
                                            {user && user.username}
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className='flex-grow'>
                            </div>
                            {
                                user ?
                                    <div className="my-auto pl-2">
                                        <button
                                            className="bg-red-500 text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                                            onClick={signOut}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                    :
                                    <div className="my-auto">
                                        <button
                                            className="text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                                            style={{ backgroundColor: '#7289DA' }}
                                            onClick={handleLogin}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    );
}