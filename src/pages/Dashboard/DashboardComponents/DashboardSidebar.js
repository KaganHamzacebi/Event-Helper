import {NavLink, useHistory} from "react-router-dom";
import SelectIconInput from "../../../components/SelectIconInput/SelectIconInput";
import {Link} from "react-scroll";
import React, {useContext, useEffect} from "react";
import {DashboardContext} from "../Dashboard";
import {UserContext} from "../../../App";

export default function DashboardSidebar() {
    const history = useHistory();
    const {user, userGuilds} = useContext(UserContext);
    const {isOpen, setIsOpen, indexGuild, mappedGuilds} = useContext(DashboardContext);

    return (
        <div>
            <div
                className={`${isOpen ? '-translate-x-full' : ''} z-50 transform transition-transform duration-500 flex fixed flex-shrink-0 flex-col flex-nowrap sm:static w-full sm:w-72 h-full bg-home pt-6 p-5 shadow-md`}>
                <div className='flex flex-row items-center'>
                    <NavLink to='/' className='flex flex-grow cursor-pointer' onClick={() => history.push('/')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="white">
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                        <span className='text-primary font-bold text-2xl ml-2 flex-grow'>Tetherer</span>
                    </NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 visible sm:hidden" viewBox="0 0 20 20"
                         fill="white" onClick={() => setIsOpen(!isOpen)}>
                        <path fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                {
                    indexGuild == null ?
                        <div className='mt-6 transition-color duration-700'>
                            <div
                                className={`w-full flex border h-14 border-gray-900 rounded pl-3.5 pr-8 bg-gray-700 opacity-10 animate-pulse`}>
                            </div>
                        </div>
                        :
                        <div className='mt-6'>
                            {<SelectIconInput
                                name='guild_select'
                                //content={mappedGuilds}
                                content={userGuilds}
                                onSelect={(id) => history.push(`/dashboard/${id}`)}
                                defaultIndex={indexGuild}
                                width='full'
                                height={14}
                                placeholder='Select'
                            />}
                        </div>
                }
                {/* Events */}
                <div className='mt-2'>
                    <div className='flex flex-row items-center p-2'>
                        <span className='text-primary text-lg font-semibold uppercase'>Events</span>
                    </div>
                    <div className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Event List</span>
                    </div>
                    <div className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Statistics</span>
                    </div>
                </div>
                {/* Guild Settings */}
                <div>
                    <div className='flex flex-row items-center p-2'>
                        <span className='text-primary text-lg font-semibold uppercase'>Guild Settings</span>
                    </div>
                    <Link to="general" spy={true} smooth={true} containerId="dashboardScrollContainer"
                          className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd"
                                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span className='ml-2 text-primary'>General</span>
                    </Link>
                    <Link to="permissions" spy={true} smooth={true} containerId="dashboardScrollContainer"
                          className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd"
                                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Permissions</span>
                    </Link>
                    <Link to="logChannel" spy={true} smooth={true} containerId="dashboardScrollContainer"
                          className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                            <path fillRule="evenodd"
                                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Log Channels</span>
                    </Link>
                </div>
                {/* Premium */}
                <div className='mt-2'>
                    <div className='flex flex-row items-center p-2'>
                        <span className='text-primary text-lg font-semibold uppercase'>Premium</span>
                    </div>
                    <div className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Status</span>
                    </div>
                    <div className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                            <path fillRule="evenodd"
                                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Purchase</span>
                    </div>
                    <div className='flex flex-row items-center p-2 rounded group cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path
                                d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
                        </svg>
                        <span
                            className='ml-2 text-primary text-opacity-70 trainsition-all duration-500 group-hover:text-opacity-100'>Transfer</span>
                    </div>
                </div>
                <div className='flex-grow'></div>
                {/* Acoount Settings */}
                <div className='border-t border-white border-opacity-40'></div>
                <div className='flex flex-row hover:bg-gray-700 py-3 px-2 rounded-lg items-center mt-2 cursor-pointer'
                     onClick={() => history.push('/user_settings')}>
                    {
                        user && user.id &&
                        <img
                            className="h-8 w-8 rounded-full"
                            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                            alt="user_avatar"
                        />
                    }
                    <span className='ml-3 text-primary'>
                        Account settings
                    </span>
                    <div className='flex-grow'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-2" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}