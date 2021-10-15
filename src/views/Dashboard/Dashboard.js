import './Dashboard.css'
import {Element} from 'react-scroll';
import {UserContext} from '../../App';
import React, {createContext, useContext, useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';

/* Pages */
import DashboardMenu from './DashboardComponents/DashboardMenu/DashboardMenu';
import GuildService from '../../service/GuildService';
import DashboardSidebar from "./DashboardComponents/DashboardSidebar";
import DashboardTopbar from "./DashboardComponents/DashboardTopbar";

export const GuildSettingsContext = createContext(null);
export const DashboardContext = createContext(null);

export default function Dashboard() {
    const {id} = useParams();
    const {userToken} = useContext(UserContext);
    const [guildSettings, setGuildSettings] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const guildService = new GuildService();

    useEffect(() => {
        async function fetchData() {
            const guildSettingsResponse = await guildService.getGuildSettings(userToken, id);
            setGuildSettings(guildSettingsResponse.data);
        }

        if (userToken) {
            fetchData();
        } else {
            window.location.href = process.env.REACT_APP_WEB_URL;
        }
        // eslint-disable-next-line
    }, [userToken])

    return (
        <div className='flex w-full h-full'>
            <Helmet>
                <title>Dashboard | Tetherer</title>
                <meta name='robots' content='noindex'/>
            </Helmet>
            {/* Sidebar */}
            <DashboardContext.Provider value={{isOpen, setIsOpen}}>
                <DashboardSidebar/>
            </DashboardContext.Provider>
            <div className='flex flex-col flex-grow w-screen'>
                {/* Topbar */}
                <DashboardContext.Provider value={{isOpen, setIsOpen}}>
                    <DashboardTopbar/>
                </DashboardContext.Provider>
                {/* Content */}
                <Element id='dashboardScrollContainer'
                         className='element p-4 md:p-12 flex flex-col bg-content overflow-y-auto dashboard-content-wrapper'>
                    {/* Inner Content */}
                    <div className='flex-grow rounded w-full'>
                        <GuildSettingsContext.Provider value={{guildSettings}}>
                            <DashboardMenu/>
                        </GuildSettingsContext.Provider>
                    </div>
                </Element>
            </div>
        </div>
    )
}